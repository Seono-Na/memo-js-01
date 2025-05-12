// 1. 상수 객체
const animal = {
  type: "cat",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망"; // 수정
delete animal.color; //삭제

// 2. 메서드
// => 값이 함수인 프로퍼티를 말함

const person = {
  name: "홍길동",
  // 메서드
  sayHi: function () {
    console.log("Hi");
  },
  syaHello: () => {
    console.log("Hello");
  },
  // 메서드 선언
  sayBye() {
    console.log("Bye");
  },
};

person.sayHi();
person["syaHello"]();
person.sayBye();
