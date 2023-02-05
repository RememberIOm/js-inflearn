// 자바스크립트에는 정수와 실수의 자료형이 따로 있지 않음
let integer = 100;
let real = 1.234;
let negative = -5.67;

console.log(
    typeof integer,
    typeof real,
    typeof negative
);

// let x = 1 / 0;
// console.log(x, typeof x);

// // 무한대에는 양음이 있음
// console.log(-x, typeof -x);

// let y = -1 / 0;
// console.log(y, typeof y);

// let z = Infinity;
// console.log(z, typeof z);

// let x = 1 / 'abc';
// let y = 2 * '가나다';
// let z = NaN;

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// NaN은 양음이 없음
console.log(-NaN);

// let x = 1 / 'abc';

// console.log(
//     x,
//     x == NaN,
//     x === NaN,
//     isNaN(x), // 숫자가 아닐 시 true
//     Number.isNaN(x) // 보다 엄격한 버전
// );

console.log(
    typeof '1', isNaN('1'), Number.isNaN('1')
); // 특정 숫자로 변환 가능한 문자

console.log(
    typeof true, isNaN(true), Number.isNaN(true)
); // true는 1, false는 0으로 변환됨

console.log(
    typeof 'a', isNaN('a'), Number.isNaN('a')
); // ⚠️ 특정 숫자로 변환 불가인 문자의 경우 차이

console.log(
    typeof (1 / 'a'), isNaN(1 / 'a'), Number.isNaN(1 / 'a')
); // NaN값인 경우


// // 값 반환
// let x = 10;
// let y = x * 10;

// console.log(y);

// console.log(
//     y + 1, // 덧샘
//     y - 1, // 뺄셈
//     y * 2, // 곱셈
//     y / 5, // 나눗셈
//     y % 3,  // 나머지
//     y ** 2 // 제곱
// );

// // 부수효과 없음
// console.log(y);


// 널리 사용되는 홀수와 짝수의 판별법
console.log(
    '홀수 ',
    123 % 2,
    55 % 2,
    999 % 2
);
console.log(
    '짝수 ',
    2 % 2,
    100 % 2,
    8 % 2
);

console.log(
    4 * 1 + 2,
    4 * (1 + 2),
    4 * -(1 + 2),
    -(4 * -(1 + 2))
);


// let x = 10;

// // 값을 반환부터 하고 증가
// console.log('1.', x++, x);

// // 값을 증가부터 하고 반환
// console.log('2.', ++x, x);

// let x = 3;
// let y = 4;

// // 💡 부수효과가 일어나는 시점
// console.log(x-- * --y, x, y);

// let x = 1;
// console.log(
//     +x,
//     -x,
//     -(-x),
//     -(x++),
//     -x * -1
// );

console.log(
    +'100',
    -'100',
    +'abc' // 숫자로 변환될 수 없는 문자열
);

// let x = '100';
// console.log(x++, x);

// let y = '100';
// console.log(--y, y);

// 숫자로 변환될 수 없는 문자열
// 첫 번째 값 주의 - 증가 이전에도 변환
let z = 'abc';
console.log(z++, z);


let x = 3;

x += 2;
console.log(x);

x -= 3;
console.log(x);

x *= 12;
console.log(x);

x /= 3;
console.log(x);

x %= 5;
console.log(x);

x **= 4;
console.log(x)

let y = 25;

console.log(
    y **= 0.5, // 할당된 결과 반환
    y
);


console.log(0.1 + 0.2)