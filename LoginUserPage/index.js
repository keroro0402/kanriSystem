const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('こんにちは！このメッセージが見えますか？？？');
});

app.post('/login', (req, res) => {
  console.log('POSTリクエストされました');
});

app.listen(5100, () => {
  console.log('5100番で準備が出来ました。5100にアクセスしてみてください。');
});
