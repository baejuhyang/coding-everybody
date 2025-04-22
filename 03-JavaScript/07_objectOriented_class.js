// 클래스
// class는 객체를 만드는 공장이다
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

// // 방법2)
// class Person {
//     constructor(name, first, second) {
//         this.name = name;
//         this.first = first;
//         this.second = second;
//     }

//     // class 안에 넣기
//     sum() {
//         return `prototype: ${this.first + this.second}`;
//     } // 같은 클래스에 속해 있는 모든 객체가 공유하는 함수
// }

// var kim = new Person('kim', 10, 20);
// console.log(kim); // Person { name: 'kim', first: 10, second: 20 }
// console.log(kim.sum()); // prototype: 30

// var lee = new Person('lee', 10, 10);
// // lee는 함수를 다르게 적용하고 싶다면
// lee.sum = function () {
//     return `this: ${this.first + this.second}`;
// };
// console.log(lee.sum()); // this: 20
// // JS는 lee라는 객체가 sum이라는 함수를 가지고 있는지 먼저 확인 후
// // 없으면 lee 객체의 class안에 sum 메소드가 정의되어있는지 보고 실행

// // 클래스 상속 inheritance
// class Person {
//     constructor(name, first, second) {
//         this.name = name;
//         this.first = first;
//         this.second = second;
//     }
//     sum() {
//         return this.first + this.second;
//     }

//     // 코드를 수정하는 방법
//     // avg() {
//     //     return (this.first + this.second) / 2;
//     // }
// }

// // 코드를 수정하지 않고, class 를 하나 더 만듦듦
// class PersonPlus extends Person {
//     // constructor(name, first, second) {
//     //     this.name = name;
//     //     this.first = first;
//     //     this.second = second;
//     // }
//     // sum() {
//     //     return this.first + this.second;
//     // }
//     // 중복을 제거

//     avg() {
//         return (this.first + this.second) / 2;
//     }
// }

// var kim = new PersonPlus('kim', 10, 20);
// console.log(kim.sum()); // 30
// console.log(kim.avg()); // 15

// // 상속, 확장을 통해 중복되는 코드 제거, 유지보수의 편의성 도모

// super
// 자식 class와 부모 class간의 관계에 대한 문제
class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second;
    }
}

// 세번째 값도 가지고 싶다면
class PersonPlus extends Person {
    constructor(name, first, second, third) {
        super(name, first, second); // 부모 class를 불러 일을 시키고
        this.third = third; // 부모가 하지 못하는 일은 나만 하도록
    }

    sum() {
        return super.sum() + this.third; // 부모 class의 sum 을 호출하여 추가 작업 실행
    }
    avg() {
        return (this.first + this.second + this.third) / 3;
    }
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());

// super의 용법 2가지
// 1. super(): 부모 클래스의 생성자를 호출한다.
// 2. super."메서드명"(): 부모 클래스의 프로토타입 메서드를 호출한다.

// *super 키워드의 장점
// 1. 부모 클래스에서 선언된 생성자, 변수(필드), 메서드를 재사용할 수 있다.
// 2. 자식 클래스에서 생성자와 메서드를 중복 선언할 필요가 없어진다.
