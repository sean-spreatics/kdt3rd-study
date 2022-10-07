console.log('!');

// document 객체
// 속성

console.log(document.documentElement); // html 태그 반환
console.log(document.head); // head 태그 반환
console.log(document.body); // body 태그 반환

console.log(document.URL); // 웹페이지 전체 url 반환
console.log(document.domain); // url에서 도메인 반환

// html 요소 선택하는 방법
// = dom 요소 선택하기 (DOM API)

// 노드 객체 가져오기
// 1. getElementById(아이디명): 아이디 이름으로 요소 가져옴 
// id 는 유일하므로 속도가 가장 빠름
console.log(document.getElementById('first'));
console.log(document.getElementById('second'));
console.log(document.getElementById('third'));
console.log(document.getElementById('fourth'));
console.log(document.getElementById('fifth'));

// 2. getElementsByClassName(클래스명): 클래스 이름으로 요소 가져옴
console.log(document.getElementsByClassName('korean'));
console.log(document.getElementsByClassName('bunsik'));
console.log(document.getElementsByClassName('dessert'));
console.log(document.getElementsByClassName('korean')[0]);

// 3. getElementsByTagName(태그명): 태그 이름으로 요소 가져옴 
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('h2'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByTagName('li')[2]);

// 4. getElementsByName(name속성값):
console.log(document.getElementsByName('userid'));
console.log(document.getElementsByName('userid')[0]);
console.log(document.getElementsByName('userid')[0].value);


// "css 선택자"를 이용해 노드 객체 가져오기
// 5. querySelector(css셀렉터): 일치하는 "첫번째 요소"를 가져옴
console.log(document.querySelector('.korean'));
console.log(document.querySelector('.bunsik'));
console.log(document.querySelector('.dessert'));
console.log(document.querySelector('input[name="userid"]'))

// 6. querySelectorAll(css셀렉터): 일치하는 "모든 요소"를 배열로 가져옴
console.log(document.querySelectorAll('.korean'));
console.log(document.querySelectorAll('.bunsik'));
console.log(document.querySelectorAll('.dessert'));
console.log(document.querySelectorAll('.korean')[0]);

console.log(document.querySelectorAll('.launch-list #third'));
