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
// let score = [1, 2, 3];
// let score2 = score.concat(4); // 원본은 보전하지만 성능이 느려짐
// console.log(score, score2); // [ 1, 2, 3 ] [ 1, 2, 3, 4 ]

// Object.freeze
// 객체를 얼려 누구도 그 객체를 수정하지 못하게 함.
// let o1 = { name: 'kim', score: [1, 2] };
// Object.freeze(o1);
// o1.name = 'lee'; // 수정되지 않음
// o1.city = 'seoul'; // 추가되지 않음
// console.log(o1); // { name: 'kim', score: [ 1, 2 ] } // 원본 보존

// unfreeze하는 명령은 제공하지 않음. // freeze를 풀고 싶다면, 복제해서 사용

// 객체의 property의 값이 객체라면 걔를 규제할 수는 없음
// o1.score.push(3);
// console.log(o1); // { name: 'kim', score: [ 1, 2, 3 ] }
// o1.score에는 값이 저장되어 있지 않고 reference만 저장되어 있기 때문
// 안의 객체도 얼려야 함.
// Object.freeze(o1.score);
// o1.score.push(4);
// console.log(o1); // 에러

// Object.free()와 const의 차이
// const o1 = { name: 'kim' };
// const o2 = { name: 'lee' };
// // o1 = o2; // 에러 // o1이라는 변수가 가르키는 대상이 될 값을 바꾸지 못하게 함. 참조가 바뀌지 않게 함.
// o1.name = 'park'; // 값은 바뀜
// console.log(o1); // { name: 'park' }

// Object.freeze(o1);
// o1.name = 'park'; // 값이 안바뀜
// console.log(o1); // { name: 'kim' }

let o1 = { name: 'kim' };
let o2 = { name: 'lee' };
Object.freeze(o1); // 값을 바꾸지 못하게 하는 것은 Object.freeze();
// o1.name = 'lee'; // 값이 안바뀜
// console.log(o1); // { name: 'kim' }

o1 = o2;
console.log(o1); // { name: 'lee' } // 참조가 바뀜
o1.name = 'park';
console.log(o1); // { name: 'park' } // 여기서 참조하는 것은 freeze하지 않았기에 값이 바뀜
