// #1 프로미스 (Promise)
// - 비동기 함수를 동기처리 하기 위해 만든 객체
// - 성공, 실패를 분리해서 반환
//  성공이든 실패든 무언가의 "최종 결과"
//  - fulfilled (resolve): 성공
//  - rejected (reject): 실패

// promise 객체를 반환하는 promise1 함수 정의
/*
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag === true) {
      resolve(
        `⭕promise 상태는 fulfilled! then()으로 연결됩니다. \n 이때 flag가 ${flag} 입니다.`
      ); // true (성공)
      // resolve -> then으로 연결
    } else {
      reject(
        `❌promise 상태는 rejected! catch()으로 연결됩니다. \n 이때 flag가 ${flag} 입니다.`
      ); // false (실패)
      // reject -> catch로 연결
    }
  });
}

promise1(true) // true, false, 5>3
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });
*/

// #2 Promise 사용법
// index.js 에서 "콜백함수"를 이용해 동기처리한 것을
// "promise"를 이용해 동기처리 해보자!!!
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    // setTimeout() 비동기 처리 -> 동기처리 하기 위해 promise로 감싸기
    setTimeout(function () {
      console.log('고민 끝!');
      product = '제로 콜라';
      price = 2000; // 2000, 4000
      resolve();

      // reject도 사용하려는 경우
      //   if (price <= 2000) {
      //     resolve();
      //   } else {
      //     reject();
      //   }
    }, 3000);
  });
}

function pay() {
  console.log(`${product} 제품의 가격은 ${price}이다.`);
}

// reject 도 사용하려는 경우
// function nopay() {
//   console.log(`${product} 제품의 가격은 ${price}이다. 비싸서 안삽니다.`);
// }

let product;
let price;
goMart();
pickDrink().then(pay);
// reject 도 사용하려는 경우
// pickDrink().then(pay).catch(nopay);

// #3 Promise 체이닝
// ex. 함수를 이용해 (4 + 3) * 2 - 1 = 13 연산을 해보자!
// add -> mul -> sub 순으로 연산 필요

// step1. 콜백함수 사용
/*
function add(n1, n2, callback) {
  setTimeout(function () {
    let result = n1 + n2; // 4 + 3 = 7
    callback(result); // callback(7)
  }, 1000);
}

function mul(n, callback) {
  setTimeout(function () {
    let result = n * 2; // 7 * 2 = 14
    callback(result); // callback(14)
  }, 700);
}

function sub(n, callback) {
  setTimeout(function () {
    let result = n - 1; // 14 - 1 = 13
    callback(result); // callback(13)
  }, 500);
}

add(4, 3, function (x) {
  // add 함수 정의부의 callback(result)
  console.log('1: ', x); // 7
  mul(x, function (y) {
    // mul 함수 정의부의 callback(result)
    console.log('2: ', y); // 14
    sub(y, function (z) {
      // sub 함수 정의부의 callback(result)
      console.log('3: ', z); // 13
    });
  });
});
*/

// step2. 프로미스 체이닝 사용
/*
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result); // resolve(7)
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
      // *에러처리: 의도적으로 에러 일으킴
      //   reject(new Error('의도적으로 에러를 일으켜봤음!!'));
    }, 500);
  });
}

add(4, 3) // add(4, 3) -> resolve(7) - then(7)
  .then(function (result) {
    console.log('1: ', result); // 7
    return mul(result); // return mul(7) - resolve(14) -> then(14)
  })
  .then(function (result) {
    console.log('2: ', result); // 14
    return sub(result); // return sub(14) -> resolve(13) -> then(13)
  })
  .then(function (result) {
    console.log('3: ', result); // 13
  });
  */

// *에러처리
// add(4, 3) // add(4, 3) -> resolve(7) - then(7)
//   .then(function (result) {
//     console.log('1: ', result); // 7
//     return mul(result); // return mul(7) - resolve(14) -> then(14)
//   })
//   .then(function (result) {
//     console.log('2: ', result); // 14
//     return sub(result); // return sub(14) -> resolve(13) -> then(13)
//   })
//   .then(function (result) {
//     console.log('3: ', result); // 13
//   })
//   .catch(function (err) {
//     console.log('실패!');
//     console.log(err);
//   });
