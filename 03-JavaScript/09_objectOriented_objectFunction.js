// js에서 함수는 new 키워드를 붙여 호출하면 객체 생성 가능
// 함수는 특정한 객체나 class에 종속되지 않고 독립적으로 존재할 수 있으며, 필요에 따라 어떤 객체의 메소드로도 활용될 수 있다.

// // ## call
// // call을 통해서 실행할 때마다 this의 값을 변경하는 방법
// let kim = { name: 'kim', first: 10, second: 20 };
// let lee = { name: 'lee', first: 10, second: 10 };

// function sum() {
//     return this.first + this.second;
// } // 어떤 객체에도 속해있지 않음
// sum.call(); // sum이라는 객체를 실행시킴 // sum(); 와 같음
// // 모든 함수는 call이라는 메소드를 가지고 있음.

// console.log(sum.call(kim)); // 30
// // call 이라는 함수의 메소드를 호출 시 첫번째 인자로 kim을 주면
// // 함수 sum 안에서 내부적으로 this = kim; 이 된다.
// console.log(sum.call(lee)); // 20

// // 만약 함수에 parameter가 있다면
// function sum2(prefix) {
//     return prefix + (this.first + this.second);
// }
// // 두 번째 인자부터는 호출하려는 함수의 parameter에 들어갈인자값.
// console.log(sum2.call(kim, '=>')); // =>30
// console.log(sum2.call(lee, ':')); // :20

// ## bind // 함수를 즉시 실행하지 않고, this를 고정한 새로운 함수를 반환.
// 호출될 때 마다 함수의 내부적으로 사용할 this를 다른 것으로 고정
let kim = { name: 'kim', first: 10, second: 20 };
let lee = { name: 'lee', first: 10, second: 10 };

function sum(prefix) {
    return prefix + (this.first + this.second);
}

let kimSum = sum.bind(kim, '*');
// 인자는 함수의 내부적으로 this를 뭘로 쓸거냐
// sum 함수의 this를 kim으로 하는 새로운 함수가 만들어짐
// 호출될 때마다 사용될 인자를 지정할 수 있음.

console.log(kimSum()); // *30

// sum은 바뀌지 않고, 새로운 함수가 만들어져서 return 되는 것 // sum에는 영향을 주지 않음

// call은 실행할 떄 함수의 this값을 바꿈
// bind는 함수의 this값을 영구적으로 바꾸는 새로운 함수를 만듦
