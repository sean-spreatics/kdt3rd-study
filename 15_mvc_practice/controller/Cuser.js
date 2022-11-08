const User = require('../model/User');

console.log(User); // { getUserInfo: [Function (anonymous)] }
console.log(User.getUserInfo()); // { realId: 'banana', realPw: '4321' }

exports.main = (req, res) => {
  res.render('index', { title: '동적 폼 실습' });
};

exports.practice30 = (req, res) => {
  console.log('***** ', req.body); // *****  { userId: 'asdf', userPw: 'asdf' }

  // DB로부터 받아온 id, pw vs. 사용자가 폼에 입력한 id, pw
  if (
    User.getUserInfo().realId === req.body.userId &&
    User.getUserInfo().realPw === req.body.userPw
  ) {
    res.send({ userInfo: req.body, isSuccess: true });
  } else {
    res.send({ isSuccess: false });
  }
};
