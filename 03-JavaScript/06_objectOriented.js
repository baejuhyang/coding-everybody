// let memberArray = ['egoing', 'graphittie', 'leezhce'];
// console.log(memberArray[1]);

// // 객체는 각각의 데이터가 어떤 데이터인지 풍부하게 설명 가능
// let memberObject = {
//     manager: 'egoing',
//     developer: 'graphittie',
//     designer: 'leezhce',
// };

// console.log(memberObject.developer);
// console.log(memberObject['developer']);

// memberObject.developer = 'hello';

// delete memberObject.manager;
// console.log(memberObject.manager); // undefined

// 객체와 반복문
// 배열은 while, for문 사용 가능
// 객체는 for...in 구문
// let memberObject = {
//     manager: 'egoing',
//     developer: 'graphittie',
//     designer: 'leezhce',
// };

// console.group('object loop');

// for (let name in memberObject) {
//     // console.log(name, memberObject.name);
//     console.log(name, memberObject[name]);
// }
// console.groupEnd();

// 객체의 사용 사례
// console.log(Math.PI);
// console.log(Math.random());
// console.log(Math.floor(3.9));

// 객체 만들어보기
// let MyMath = {
//     PI: Math.PI,
//     random: function () {
//         return Math.random();
//     }, // method 메소드 (객체에 소속되어 있는 함수)
//     floor: function (val) {
//         return Math.floor(val);
//     },
// };
// console.log(MyMath.PI);
// => 객체를 통해 서로 연관된 변수와 함수를 객체에 그룹핑하여 이름을 붙일 수 있음.

// this
// let kim = {
//     name: 'kim',
//     first: 10,
//     second: 20,
//     sum: function (f, s) {
//         return f + s;
//     },
// };
// console.log(kim.sum(kim.first, kim.second)); // 30

// this를 활용하면
// let kim = {
//     name: 'kim',
//     first: 10,
//     second: 20,
//     sum: function () {
//         return this.first + this.second;
//     },
// };
// console.log(kim.sum());

// 객체 공장
// var kim = {
//     name: 'kim',
//     first: 10,
//     second: 20,
//     third: 30,
//     sum: function () {
//         return this.first + this.second + this.third;
//     },
// };
// var lee = {
//     name: 'lee',
//     first: 10,
//     second: 10,
//     third: 10,
//     sum: function () {
//         return this.first + this.second + this.third;
//     },
// };
// console.log('kim.sum()', kim.sum());
// console.log('lee.sum()', lee.sum());

// 공장으로 만들어보기
// function Person() {
//     this.name = 'kim';
//     this.first = 10;
//     this.second = 20;
//     this.third = 30;
//     this.sum = function () {
//         return this.first + this.second + this.third;
//     };
// }
// console.log(new Person());
// new를 앞에 붙이면, 일반적인 함수가 아니라 객체를 생성하는 생성자가 된다.
// 생성자 = consturctor

// 매개인자를 만들어보기
// function Person(name, first, second, third) {
//     this.name = name;
//     this.first = first;
//     this.second = second;
//     this.third = third;
//     this.sum = function () {
//         return this.first + this.second + this.third;
//     };
// }

// let kim = new Person('kim', 10, 20, 30);
// let lee = new Person('lee', 10, 10, 10);
// console.log(kim.sum()); // 60
// console.log(lee.sum()); // 30

// JS의 내장 constructor
// let d1 = new Date('2025-04-10'); // d1은 객체이다
// console.log(d1.getFullYear()); // 2025
// console.log(d1.getMonth()); // 3

// 프로토타입
// function Person(name, first, second, third) {
//     this.name = name;
//     this.first = first;
//     this.second = second;
//     this.third = third;
//     this.sum = function () {
//         return this.first + this.second + this.third;
//     };
//     // 문제1) 객체의 sum 이라는 함수가 생성될 때마다 새로 만들어지고 있다 // 즉, 메모리 낭비
//     // 문제2) 이 sum 함수를 수정하기 위해서는 function 밖에서 Person 함수로 만들어진 객체를 일일이 수정해야 함
//     // 생성자 안에서 메소드를 만드는 것이 갇는 단점. 생산성이 떨어짐.
// }

// let kim = new Person('kim', 10, 20, 30);
// kim.sum = function () {
//     return `modified: ${this.first} + ${this.second}`;
// };

// let lee = new Person('lee', 10, 10, 10);
// lee.sum = function () {
//     return `modified: ${this.first} + ${this.second}`;
// };

// Person이라는 생성자를 이용해 만든 모든 객체가 공통적으로 사용하는 함수를 만들수 있으면 좋겠다!
// prototype을 이용해서 코드의 재사용성을 높이고, 성능을 향상

// function Person(name, first, second, third) {
//     this.name = name;
//     this.first = first;
//     this.second = second;
//     this.third = third;
// }
// Person이라는 생성자 함수에 공통적으로 사용할 sum이라는 메소드를 만들고자 한다
// Person이라는 생성자 함수의 원형을 정한다. sum이라는 함수의.
// Person.prototype.sum = function () {
//     return this.first + this.second + this.third;
// };

// let kim = new Person('kim', 10, 20, 30);
// let lee = new Person('lee', 10, 10, 10);
// console.log('kim.sum()', kim.sum());
// console.log('lee.sum()', lee.sum());
// 장점
// Person 생성자 함수 안에서 정의되지 않기 때문에 정의하는 코드가 객체가 만들어질 때 마다 실행되지 않고 한번만 실행됨. 성능 절약
// 한번만 정의되기 때문에 메모리 절약.

// kim이라는 sum만 다르게 동작하도록 할 수도 있음
// kim.sum = function () {
//     return `this: ${this.first + this.second}`;
// };
// console.log('kim.sum()', kim.sum()); // kim이라는 객체의 sum 메소드를 호출할 때 그 객체 자신이 sum이라는 속성을 가지고 있는지 찾아 실행하고,
// console.log('lee.sum()', lee.sum()); // 없으면 객체의 생성자인 Person의 prototype에 sum이라는 메소드가 정의되어 있는지를 찾고 실행한다.

// 클래스 // class는 객체를 만드는 공장이다
// class Person {
//     // 객체의 초기 상태 세팅
//     // 객체가 생성될 때 그 객체의 초기상태를 지정하기 위한 객체가 만들어지기 직전에 실행되도록 약속된 함수 constructor
//     // constructor 이름을 반드시 사용해야 함
//     // 메소드를 만들 때는 function 키워드 사용하지 않아도 됨.
//     constructor(name, first, second) {
//         this.name = name;
//         this.first = first;
//         this.second = second;
//     }
// }

// var kim = new Person('kim', 10, 20); // constructor 함수가 객체가 생성되는 과정에서 실행된다.
// console.log(kim); // Person { name: 'kim', first: 10, second: 20 }

// 메소드 구현
// class Person {
//     constructor(name, first, second) {
//         this.name = name;
//         this.first = first;
//         this.second = second;
//     }
// }

// // 방법1)
// Person.prototype.sum = function () {
//     return `prototype: ${this.first + this.second}`;
// };

// var kim = new Person('kim', 10, 20);
// console.log(kim); // Person { name: 'kim', first: 10, second: 20 }
// console.log(kim.sum()); // prototype: 30

// 방법2)
class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }

    // class 안에 넣기
    sum() {
        return `prototype: ${this.first + this.second}`;
    } // 같은 클래스에 속해 있는 모든 객체가 공유하는 함수
}

var kim = new Person('kim', 10, 20);
console.log(kim); // Person { name: 'kim', first: 10, second: 20 }
console.log(kim.sum()); // prototype: 30

var lee = new Person('lee', 10, 10);
// lee는 함수를 다르게 적용하고 싶다면
lee.sum = function () {
    return `this: ${this.first + this.second}`;
};
console.log(lee.sum()); // this: 20
// JS는 lee라는 객체가 sum이라는 함수를 가지고 있는지 먼저 확인 후
// 없으면 lee 객체의 class안에 sum 메소드가 정의되어있는지 보고 실행
