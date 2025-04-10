let memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log(memberArray[1]);

// 객체는 각각의 데이터가 어떤 데이터인지 풍부하게 설명 가능
let memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce',
};

console.log(memberObject.developer);
console.log(memberObject['developer']);

memberObject.developer = 'hello';

delete memberObject.manager;
console.log(memberObject.manager); // undefined

// 객체와 반복문
