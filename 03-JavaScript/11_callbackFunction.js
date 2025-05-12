// # first class citizen
// 조건1)
// val = 1;
// 숫자(1)는 변수의 값이 될 수 있다. -> first class citizen 가능.
// 조건문은 변수의 값이 될 수 없다. -> first class citizen 불가능. second class citizen.
// 함수는 변수의 값이 될 수 있다. -> first class citizen 가능. (js이기에 가능, java에서는 불가능)

// 조건2) 함수가 다른 함수의 return 값이 될 수 있다. => 함수를 first citizen으로 대우함.
function fn() {
    let val = function () {};
    return val;
}

// 조건3) 함수가 다른 함수의 입력값이 될 수 있음. => 그 언어에서는 함수를 first citizen으로 대우함.
let val = function () {};
fn(val);

// # 콜백함수는?
let val = function () {};
function fn(arg) {
    arg(); // arg라는 파라미터를 받아서 함수 안에서 파라미터를 함수로써 호출
}
fn(val);
// 함수를 함수 내에서 호출
// 함수가 다른 함수의 입력값으로 전달되어 다른 함수에 의해 나중에 호출된다 = Callback Function

// # arr.filter(callback(element[, index[, array]]))[, thisArg]
// filter라는 함수
// - 각 요소를 시험할 함수. true를 반환하면 요소 유지, false를 반환하면 버림.
// - 첫번째 파라미터로 함수를 받는다.
// ㄴ 이 함수는 3개의 파라미터를 받음. 첫번째는 필수, 나머지는 optional.
// ㄴ element: 판단해야 할 각각의 원소, 처리할 현재 요소

let words = ['orange', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// function callback(element) {
//     return element.length > 6;
// }
// let newWords = words.filter(callback);

let newWords = words.filter((element) => element.length > 6);
console.log(newWords); // [ 'exuberant', 'destruction', 'present' ]

// filter라는 함수는 우리가 공급한 filter함수를 소비함.
