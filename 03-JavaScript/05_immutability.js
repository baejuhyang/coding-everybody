var v = 1;
v = 2;
console.log('v:', v);

const c = 1;
// c = 2; // TypeError: Assignment to constant variable.
// c는 상수로 한 번 값을 가지면, 그 이후로는 값을 변경할 수 없다.
// 무주의하게 값을 바꾸는 시도를 할 수 없음. 그 시도를 했을 때 프로그래머가 즉시 문제가 되는 행동을 했음을 파악할 수 있음.

// var p1 = 1;
// var p2 = 1;
// console.log(p1, p2, p1 === p2);

// var o1 = { name: 'kim' };
// var o2 = { name: 'kim' };
console.log(o1, o2, o1 === o2);
// 객체는 서로 다른 곳을 참조함.

// 객체의 복사
// var o1 = { name: 'kim' };
// var o2 = Object.assign({}, o1); // {}와 o1 객체의 병합 // 복사
// o2.name = 'lee';
// console.log(o1, o2, o1 === o2);

// 중첩된 객체의 복사
var o1 = { name: 'kim', score: [1, 2] };
var o2 = Object.assign({}, o1);
o2.score = o2.score.concat();
o2.score.push(3);
console.log(o1, o2, o1 === o2, o1.score === o2.score);
