const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static(__dirname + '/dist/assets')); // POSTされたフォームデータを受け取る

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

// ログインページにアクセスした時の処理
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

// ログインページから送信した時の処理
app.post('/login', (req, res) => {
  console.log('reqの中身', req);
  res.send(' 送信しました');
});

// サーバ待機処理 //
app.listen(5100, () => {
  console.log('5100番で準備が出来また。5100にアクセスしてみてください。');
});
