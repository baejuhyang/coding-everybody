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
function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function () {
        return this.first + this.second + this.third;
    };
}

let kim = new Person('kim', 10, 20, 30);
let lee = new Person('lee', 10, 10, 10);
console.log(kim.sum()); // 60
console.log(lee.sum()); // 30

// JS의 내장 constructor
// let d1 = new Date('2025-04-10'); // d1은 객체이다
// console.log(d1.getFullYear()); // 2025
// console.log(d1.getMonth()); // 3
