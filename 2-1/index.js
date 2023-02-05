// const a = true, b = 123.45, c = '안녕하세요!';

// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);

let d;
console.log(d, typeof d);

d = null;
console.log(d, typeof d); // ⚠️ 'object' 반환

const e = Symbol('hello');
console.log(typeof e); // 이건 나중에


let isEmployed = true;
let isMarried = false;

console.log('직업 있음:', isEmployed);
console.log('기혼:', isMarried);

const a = 1 > 2;
const b = 1 < 2;

console.log(a, typeof a);
console.log(b, typeof b);

let integer = 100;
let real = 12.34;
let negative = -99;

console.log(integer, real, negative);

let first_name = "Brendan";
let last_name = 'Eich';
let description = `미국의 프로그래머로
자바스크립트 언어를 만들었으며
모질라의 CEO와 CTO를 역임했다.`;

console.log(first_name, last_name);
console.log(description);

console.log(
    typeof (typeof true),
    typeof (typeof 123.45),
    typeof (typeof 'Hello'),
);


// let x;
// console.log(typeof x);

// let x;
// console.log('값 넣기 전', typeof x);

// x = null;
// console.log('null값 넣은 후', typeof x);

// let x = 1;
// console.log('변경 전', x);

// x = null;
// console.log('변경 후', x);

let x = null;
console.log(typeof null, typeof x);

// null 여부는 아래와 같이 확인할 것
console.log(x === null);