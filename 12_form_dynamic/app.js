const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing (경로 설정)
app.get('/', function (req, res) {
  res.render('dynamic', { title: '동적 폼을 배워보자!!' });
});

// 1. ajax
// GET /ajax
app.get('/ajax', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// POST /ajax
app.post('/ajax', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 2. axios
// GET /axios
app.get('/axios', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// POST /axios
app.post('/axios', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 3. fetch
// GET /fetch
app.get('/fetch', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// POST /fetch
app.post('/fetch', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 실습 30번 힌트
app.post('/seanPost', (req, res) => {
  console.log(req.body);
  // req.body: 유저가 프론트에서 입력한 아이디/비번
  // 진짜 아이디/비번 변수로 저장되어
  // 유저가 입력한 아이디와 비번을 비교하는 로직
  //....
  res.send({ userInfo: req.body, msg: '오옹' });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
