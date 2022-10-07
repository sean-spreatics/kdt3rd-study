console.log('connected!');

// 조건문
// 어떤 조건에 따라 논리 구조를 분기(나눔)
// -> 조건에 따라 서로 다른 문장을 실행

// 연산자
// 동등 연산자: ==, !=, ===, !==
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 != 1); // false
console.log(1 != 2); // true
console.log('1' == 1); // true
console.log('2' != 1); // true
// ==, !=: 타입(자료형)이 달라도 괜찮음! 값만 비교

console.log('---')
console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 !== 1); // false
console.log(1 !== 2); // true
console.log('1' === 1); // false
console.log('2' !== 1); // false
// ===, !===: 타입(자료형)이랑 값을 모두 비교


// 비교 연산자
// >, <, >=, <=
console.log('---');
console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(1 >= 1); // true
console.log(1 <= 1); // true


// 논리 연산자
// &&: and (둘 다 참이어야 참)
// ||: or (둘 중 하나라도 참이면 참)
// !: not (참 -> 거짓, 거짓 -> 참)

console.log('---');
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(!true); // false
console.log(!false); // true
console.log(!!false); // false

console.log('---');
console.log((2 > 1) && (-2 < 1)); // true && true = true
console.log(!(2 > 1)); // !true = false
console.log(((2 > 1) && (-2 < 1)) || (5 > 2));
// (true && true) || true = true || true = true


// ===============================================
if (5 > 3) {
	console.log('bigger!');
}

// 함수 안에서 조건문을 사용한다면?
function isBig() {
	if (5 > 3) {
		return 'bigger';
	}
}
console.log(isBig()); // console.log('bigger');

// if-else
if (5 < 3) {
	console.log('bigger');
} else {
	console.log('smaller..');
}

// if - else if
// else if 키워드: 여러 개 가능
if (5 < 3) {
	console.log('smaller...')	
} else if (5 > 3) {
	console.log('bigger!')
} else if (5 == 3) {
	console.log('same')
}

if (5 < 3) {
	console.log('smaller...')	
} else if (5 > 3) {
	console.log('bigger!')
} else {
	console.log('same')
}


// 퀴즈
let score = 80;
// 90이상 A
// 80이상 B
// 70이상 C
// 60이상 D
// 60미만 F

if (score >= 90) {
	console.log('A')
} else if (score >= 80) {
	console.log('B')
} else if (score >= 70) {
	console.log('C')
} else if (score >= 60) {
	console.log('D')
} else {
	console.log('F')
}


// 조건문 중첩
// 가입한 아이디, 비번
let usrId = 'user'; 
let usrPw = '1234';
// 로그인할 때 입력한 아이디, 비번
let inputId = 'user';
let inputPw = '1234';

// 아이디가 일치
// 		ㄴ 비밀번호 일치 -> 인사
// 		ㄴ 비밀번호 불일치 -> 불일치
// 아이디가 불일치 -> 아이디 없음


if (usrId == inputId) {
	// 조건문 중첩
	if (usrPw == inputPw) {
		console.log(`${usrId}님 하이`);
	} else {
		console.log('비밀번호 틀림')
	}

} else {
	console.log('아이디 없음');
}

// =================================================
// step1. (조건문) 홀짝을 구별하는 조건문 생성
// - n 변수를 선언하고 6을 할당
// - num이 짝수라면 콘솔창에 "짝수" 출력
// - num이 홀수라면 콘솔창에 "홀수" 출력
// - 힌트) 짝수는 2로 나누어 떨어지는 수이다. 즉, 짝수는 2로 나눈 나머지가 0과 같다.
// 				나머지 연산자: %    -> n을 2로 나눈 나머지가 0인가?


// step2. (함수 + if-esle 조건문) 짝수인지 판별하는 함수 isEven() 정의하고 호출하기
// - isEven() 함수는 매개변수 x 를 가짐
// - 매개변수 x의 값이 짝수라면, true 반환
// - 매개변수 x의 값이 홀수라면, false 반환

function isEven() {
	// 함수 완성하기
}
// console.log(isEven(8)); // true
// console.log(isEven(7)); // false


// ============================================
// switch 문
// - 하나 이상의 case 문으로 구성
// - default 문이 있는데 필수는 아님 -> 작성 권장 
// - break 키워드: 블록(중괄호, {})을 빠져나갈 때 사용하는 키워드

/*
switch 문의 기본 구조

switch(x) {
	case 값: // if (x === 값)
		// x가 값과 같을 때 실행할 문장
		break; // x가 값과 같을 때의 문장을 실행 -> 블록을 빠져나옴 
	case 값2: // if (x === 값2)
		// x가 값2와 같을 때 실행할 문장
		break; // x가 값2와 같을 때의 문장을 실행 -> 블록을 빠져나옴
	default: // else 
		// x가 case에 있는 어떤 것과도 일치하지 않았을 때 실행할 문장 
		break; // 블록을 빠져나옴
}
*/
// 
let a = 2 + 2; // typeof -> number
switch(a) {
	case 3:
		console.log('비교하려는 값보다 작습니다.');	
		break;
	case 4:
		console.log('비교하려는 값과 일치합니다.');	
		break;
	case 5:
		console.log('비교하려는 값보다 큽니다.');
		break;
	default: 
		console.log('어떤 값인지 파악 안됨');
		break;
}

// switch -> if 문
if (a === 3) {
	console.log('비교하려는 값보다 작습니다.');
} else if (a === 4) {
	console.log('비교하려는 값과 일치합니다.');
} else if (a === 5) {
	console.log('비교하려는 값보다 큽니다.');
} else {
	console.log('어떤 값인지 파악 안됨');
}


// 퀴즈) switch 문으로 작성
var grade = 'A';
// A: 학점 A 
// B: 학점 B 
// C: 학점 C 
// D: 학점 D 
// F: 학점 F 
// 나머지: 오류 발생

switch(grade) {
	case 'A':
		console.log('학점 A');
		break;
	case 'B':
		console.log('학점 B');
		break;
	case 'C':
		console.log('학점 C');
		break;
	case 'D':
		console.log('학점 D');
		break;
	case 'F':
		console.log('학점 F');
		break;
	default:
		console.log('오류 발생');
		break;
}	


// 여러 개의 case 문을 묶을 수 있음
a = 6; // 재할당
switch(a) {
	case 1:
	case 2:
	case 3:
		console.log('비교하려는 값보다 작습니다.');	
		break;
	case 4:
		console.log('비교하려는 값과 일치합니다.');	
		break;
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
		console.log('비교하려는 값보다 큽니다.');
		break;
	default: 
		console.log('어떤 값인지 파악 안됨');
		break;
}

// #############################################################################################
// 삼항 연산자 
// - 3개의 피연산자를 필요로 함
// 조건식 ? (참일 때 실행할 코드) : (거짓일 때 실행할 코드)

// 짝홀 구별 (ver. if문)
var num = 3;
if (num % 2 === 0) {
	console.log('짝수');
} else {
	console.log('홀수');
}

// 짝홀 구별 (ver. 삼항 연산자)
var result = (num % 2 == 0) ? '짝수' : '홀수';
console.log(result);
// console.log((num % 2 == 0) ? '짝수' : '홀수'); 
console.log(3 > 1 ? 'bigger' : 'smaller');

// 퀴즈)
// 현재 시간을 입력받는 변수 hour 선언
// 삼항연산자를 이용해 hour 시간에 따라 오전/오후를 출력하기
let hour = 10;
let now = hour < 13 ? '오전입니다.' : '오후입니다.';
console.log(now);