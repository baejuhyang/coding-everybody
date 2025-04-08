// let v = 1;
// v = 2;
// console.log('v:', v);

// const c = 1;
// c = 2; // TypeError: Assignment to constant letiable.
// c는 상수로 한 번 값을 가지면, 그 이후로는 값을 변경할 수 없다.
// 무주의하게 값을 바꾸는 시도를 할 수 없음. 그 시도를 했을 때 프로그래머가 즉시 문제가 되는 행동을 했음을 파악할 수 있음.

// let p1 = 1;
// let p2 = 1;
// console.log(p1, p2, p1 === p2);

// let o1 = { name: 'kim' };
// let o2 = { name: 'kim' };
// console.log(o1, o2, o1 === o2);
// 객체는 서로 다른 곳을 참조함.

// 객체의 복사
// let o1 = { name: 'kim' };
// let o2 = Object.assign({}, o1); // {}와 o1 객체의 병합 // 복사
// o2.name = 'lee';
// console.log(o1, o2, o1 === o2);

// 중첩된 객체의 복사
// let o1 = { name: 'kim', score: [1, 2] };
// let o2 = Object.assign({}, o1);
// o2.score = o2.score.concat();
// o2.score.push(3);
// console.log(o1, o2, o1 === o2, o1.score === o2.score);

// 불변의 함수
// let o1 = { name: 'kim' };
// function fn(person) {
//     person.name = 'lee';
// }
// fn(o1);
// console.log(o1); // { name: 'lee' } // 원본을 바꿈

// 원본을 바꾸지 않으려면
// 방법1) 함수를 return 방식을 활용
// let o1 = { name: 'kim' };
// function fn(person) {
//     person = { ...person };
//     person.name = 'lee';
//     return person;
// }

// let o2 = fn(o1);
// console.log(o1, o2); // { name: 'kim' } { name: 'lee' }

// 방법2) 객체를 복사 후 함수 실행
// let o1 = { name: 'kim' };
// function fn(person) {
//     person.name = 'lee';
// }

// let o2 = { ...o1 };
// fn(o2);
// console.log(o1);

// JS가 가지고 있는API 중
// 원본을 immutable하게 처리할 수 있는 API // 원본을 바꾸는 방법
// let score = [1, 2, 3];
// score.push(4); // 복제를 하지 않아도 되어 성능이 빠름
// console.log(score); // [ 1, 2, 3, 4 ]

// 원본을 mutable하게 처리할 수 있는 API // 원본을 안바꾸는 방법
let score = [1, 2, 3];
let score2 = score.concat(4); // 원본은 보전하지만 성능이 느려짐
console.log(score, score2); // [ 1, 2, 3 ] [ 1, 2, 3, 4 ]
