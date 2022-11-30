// 클래스
// - 객체를 생성하는 템플릿
// 클래스: 붕어빵 틀
// 객체: 붕어빵

class Cat {
  // 생성자
  constructor(name, age) {
    // 속성
    this.name = name;
    this.age = age > 0 ? age : '올바른 값이 아님';
  }

  // 메서드
  mew() {
    return '야옹~';
  }

  eat() {
    return '밥먹자!!';
  }
}

let navi = new Cat('나비', 2);
console.log(navi.name);
console.log(navi.age);
console.log(navi.mew());
console.log(navi.eat());

let test = new Cat('나비', -2);
console.log(test);

// 연습
// Person 클래스
// - 속성: 이름, 성별
// - 메서드: study()
// Person 클래스로 만들어진 객체
// - minji
// - minku

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  study() {
    return '공부하자!';
  }
}

const minji = new Person('민지', '여');
const minku = new Person('민규', '남');

console.log(minji);
console.log(minji.name);
console.log(minji.gender);
console.log(minji.study());

console.log(minku);
console.log(minku.name);
console.log(minku.gender);
console.log(minku.study());
