// 상속
// 1. 객체를 찍어내는 공장 class -> 훨씬 쉬움
// class Person {
//     constructor(name, first, second) {
//         this.name = name;
//         this.first = first;
//         this.second = second;
//     }

//     sum() {
//         return this.first + this.second;
//     }
// }

// class PersonPlus extends Person {
//     constructor(name, first, second, third) {
//         super(name, first, second); // 부모 class가 갖고 있는 consturctor를 실행
//         this.third = third;
//     }

//     sum() {
//         return super.sum() + this.third;
//     }
//     avg() {
//         // 새로 추가된 메소드
//         return this.sum() / 3;
//     }
// }

// let kim = new PersonPlus('kim', 10, 20, 30);
// console.log(kim.sum()); // 60
// console.log(kim.avg()); // 20

// 2. 생성자 함수를 통한 상속 : 부모 생성자 실행 // prototype을 이용한 상속
function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function () {
    return this.first + this.second;
};

function PersonPlus(name, first, second, third) {
    Person.call(this, name, first, second); // call: 함수 호출 시 this 값을 원하는 객체로 직접 지정, 첫번째 인자: this로 지정할 객체
    this.third = third;
    // 부모 construction function과 자식은 아직 아무련 관련이 없다.
    // 즉, kim이라는 객체의 sum이라는 메소드를 호출 시 Personplus는 sum이라는 메서드를 갖고 있지 않다.
}
// kim이라는 객체에서 sum 메서드 호출 시 kim 객체에는 없으니 kim의 __proto__ 속성 = PersonPlus의 prototype을 확인  PersonPlus의 prototype을 확인하는데, 여기에는 없다.
// 그러면 PersonPlus's prototype의 __proto__ 속성을 확인한다.
// 그러니, ersonPlus's prototype의 __proto__ 속성이 sum()을 참조하게 하자!
// PersonPlus.prototype.__proto__ = Person.prototype;
// 아래의 방법도 가능
PersonPlus.prototype = Object.create(Person.prototype); // Person.prototype 객체를 __proto__로 하는 새로운 객체가 만들어진다.
// 그러나 kim.constructor가 [Function: Person] 이라는 문제 발생.
// let kim = new PersonPlus('kim', 10, 20, 30);
// console.log(kim.constructor); // kim.constructor는 없으니 PersonPlus's prototype에서 constructor를 찾음. // 즉, kim의 constructor function이 PersonPersonPlus이다.
// but, kim의 constructor function은 [Function: Person]이라고 출력됨
// 새로운 객체가 생성되고, prototype 속성이 PersonPlus를 참조하고 있는 PersonPlus.prototype을 지워버림
// 따라서 다음 코드 추가 필요
PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.avg = function () {
    return (this.first + this.second + this.thrid) / 3;
};

let kim = new PersonPlus('kim', 10, 20, 30);
console.log(kim.sum()); // 30
console.log(kim.avg());
console.log(kim.constructor); // [Function: Person] // kim의 constructor function이 Person이다.
// but, kim의 constructor function은 PersonPlus이다.
