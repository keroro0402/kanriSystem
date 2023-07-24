const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static(__dirname + '/dist/assets')); // POSTされたフォームデータを受け取る

// MongoDBの設定
const mongoose = require('mongoose');
const mongoPw = 'keroro0402';
const mongoName = 'kanrisystem';
mongoose
  .connect(
    'mongodb+srv://keroro:' +
      mongoPw +
      '@cluster0.jrnb4ff.mongodb.net/' +
      mongoName +
      '?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('MongoDBと接続できました');
  })
  .catch((error) => {
    console.error('MongoDBと接続できませんでした・・・');
  });

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  loginUserId: 'string', // キー名はフォームのname属性と同じにするべし
  loginUserPw: 'string', // キー名はフォームのname属性と同じにするべし
});

const UserModel = mongoose.model('User', UserSchema);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

// ユーザ登録ページにアクセスした時の処理
app.get('/create/user', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

// ユーザ登録ページから送信した時の処理
app.post('/create/user', (req, res) => {
  UserModel.create(req.body)
    .then((data) => {
      console.log('データの書き込みが成功しました');
      res.send('Userデータの送信が成功しました');
    })
    .catch((error) => {
      console.error('データの書き込みが失敗しました');
      res.send('Userデータの送信が失敗しました');
    });
});

// サーバ待機処理 //
app.listen(5100, () => {
  console.log('5100番で準備が出来また。5100にアクセスしてみてください。');
});
