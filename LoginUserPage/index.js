const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('こんにちは！このメッセージが見えますか？？？');
});

// ログインページにアクセスした時の処理 //
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html');
});

// ログインページから送信した時の処理 //
app.post('/login', (req, res) => {
  console.log('POSTリクエストされました');
});

// サーバ待機処理 //
app.listen(5100, () => {
  console.log('5100番で準備が出来ました。5100にアクセスしてみてください。');
});
