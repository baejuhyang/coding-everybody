// # JavaScript는 객체(인스턴스)와 객체 간의 상속 관계를 자유롭게 설정할 수 있습니다. 클래스가 아닌 객체를 통해서 상속하는 방법

// ## 자바스크립트의 상속이 클래스 기반 언어와 어떻게 다른지 소개
// class: 객체를 만들어내는 공장, 설계도
// instance: class를 통해 만들어진 객체

// ### 주류 언어에서의 상속
// sub class가 super class의 기능을 물려받기 위해서는 sub class가 super class의 자식이 된다. 그렇게 만들어진 subclass를 통해 객체를 생성.
// 그렇기 때문에 이 객체가 어떠한 기능을 갖게 될 것인지는 class에서 결정된다.
// 객체가 다른 객체의 상속을 받는다는 것은 불가능. 이 객체는 태어나면 자기가 어떤 기능을 갖게 될 것인지 결정되어 있음.

// ### js에서의 상속
// js는 이것보다 훨씬 더 자유로움 but 그만큼 복잡
// super object 가 있음. 이 객체의 기능을 상속받으면서 추가적으로 기능을 추가하고 싶은 객체를 sub object.
// sub가 super로부터 직접 기능을 상속받을 수 있음.
// 전통적인 주류 객체지향 언어에서는 class가 상속을 받는데, js에서는 객체가 직접 다른 객체의 상속을 받을 수 있다.
// 필요에 의해 super가 아닌 다른 객체에 의해 상속받고 싶으면 link를 바꾸면 된다. prototype link
// sub 객체의 prototype link가 가리키고 있는 객체를 prototype object라고도 부름.

// ## __proto__를 이용해서 상속을 구현하는 방법
// // js에서는 표준으로 인정하고 있지 않지만, 대부분의 브라우저에서는 지원하고 있음.
// let superObj = { superVal: 'super' };
// let subObj = { subVal: 'sub' };

// // js에서는 객체를 직접 다른 객체의 자식으로 만들 수 있다.
// subObj.__proto__ = superObj; // subObj의 원형이 무엇인가를 가리키는 prototype link를 정해주기
// console.log(subObj.subVal); // sub
// console.log(subObj.superVal); // super
// // js가 가장 먼저 subObj에서 superVal 속성을 찾고, 없으면 __proto__ 속성이 담고 있는 객체의 superVal를 찾음.
// // __proto__ 를 바꿔주면 다른 객체의 자식이 된다. 굉장히 유연.
// // 상속 받을 때 __proto__를 사용하는 것은 정석이라고 할 수 없다.

// subObj.superVal = 'sub';
// console.log(subObj.superVal); // sub // 바뀜
// console.log(superObj.superVal); // super // 바뀌지 않음
// // subObj.superVal = 'sub'; 에서는 subObj라는 객체의 값을 바꿨을 뿐, __proto__가 가리키고 있는 객체를 바꾼 것이 아님.
// // 객체의 property를 바꾸는 그 객체를 바꾸는 것이지 그 객체의 proto를 바꾸는 것이 아님.

// ## __proto__의 대체제 Object.create()
// let superObj = { superVal: 'super' };
// // let subObj = { subVal: 'sub' };
// // subObj.__proto__ = superObj;
// let subObj = Object.create(superObj); // 메소드가 인자를 부모로 하는 새로운 객체를 생성함.
// subObj.subVal = 'sub';

// console.log(subObj.subVal); // sub
// console.log(subObj.superVal); // super

// subObj.superVal = 'sub';
// console.log(subObj.superVal); // sub // 바뀜
// console.log(superObj.superVal); // super // 바뀌지 않음

// ## 기존의 예제를 class가 아닌 상속으로 구현하는 방법
// ### __proto__
// let kim = {
//     name: 'kim',
//     first: 10,
//     second: 20,
//     sum: function () {
//         return this.first + this.second;
//     },
// };
// console.log(kim.sum()); // 30

// let lee = {
//     name: 'lee',
//     first: 10,
//     second: 10,
//     avg: function () {
//         return this.sum() / 2;
//     },
// };
// lee.__proto__ = kim; // kim을 상속
// console.log(lee.sum()); // 20 // kim을 상속하여 sum 함수 받음
// console.log(lee.avg()); // 10 // kim은 가지고 있지 않은 자기만의 함수 가질 수 있음

// ### Object.create()
let kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function () {
        return this.first + this.second;
    },
};
console.log(kim.sum()); // 30

let lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function () {
    return this.sum() / 2;
};
console.log(lee.sum()); // 20
console.log(lee.avg()); // 10

// prototype과 __proto__

// 함수는 js에서 객체다. 따라서 property를 가질 수 있다.
// 두개는 같은 식
function Person() {}
let Person = new Function();

// 여기서 Person과 Person's prototype 객체 2개가 생성됨
// 두 개의 객체는 연관되어 있고 관련되어 있다
// Person에는 prototype이라는 property가 생기고 그 property는 Person's prototype 객체를 가리킨다

// Person의 prototype객체도 자신이 Person 소속임을 기록하기 위해  constructor라는 property를 가지고 그건 Person을 가리킴
// 두 객체는 상호참조하고 있음

Person.prototype.sum = function () {};
// Person의 prototype 객체에 sum prototype이 생김

let kim = new Person('kim', 10, 20);
// kim이라는 객체에는 __proto__ 가 property로 생성됨. (앞의 Person에서 정의한 속성들도 그대로 받음)
// __proto__는 Person의 prototype을 가리킴
// person의 prototype에 접근하기 위해서는 Person.prototype 또는 kim.__proto__
// kim에 property나 메소드가 없으면 __proto__로 가서 찾음
