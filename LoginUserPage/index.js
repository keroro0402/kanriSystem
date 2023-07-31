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
    console.log('MongoDBと接続できました。');
  })
  .catch((error) => {
    console.error('MongoDBと接続できませんでした・・・');
  });

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  loginUserId: {
    // キー名はフォームのname属性と同じにするべし!
    type: 'string', // データ型指定
    required: true, // 必須
    unique: true, // 唯一
  },
  loginUserPw: {
    type: 'string',
    required: true,
  },
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
  const result = UserModel.findOne({ loginUserId: req.body.loginUserId });
  result.then((data) => {
    if (data) {
      console.log('登録済みのIDなのでできません');
      res.sendFile(__dirname + '/dist/index.html');
    } else {
      console.log('登録できます');
      const d = UserModel.create(req.body);
      d.then((data) => {
        console.log('登録しました');
        res.send('登録できました');
      });
    }
  });
});

// サーバ待機処理 //
app.listen(5100, () => {
  console.log('5100番で準備が出来ました。5100にアクセスできます。');
});
