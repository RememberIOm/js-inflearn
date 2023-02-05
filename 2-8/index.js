// let x = 1, y = 2, z = 3;
// console.log(x, y, z);

// // 마지막으로 실행한 것 반환
// console.log(
//     (++x, y += x, z *= y)
// );

// let x;
// x ?? console.warn(x, 'x에 값이 없습니다.');

// x = 0;
// x ?? console.warn(x, 'x에 값이 없습니다.');

// x = null;
// x ?? console.warn(x, 'x에 값이 없습니다.');

let a = false;
let b = 0;
let c = '';
let d = null;
let e;

console.log(
    a ?? '기본값',
    b ?? '기본값',
    c ?? '기본값',
    d ?? '기본값',
    e ?? '기본값',
);

let baby1 = '홍길동';
let baby2; // 아직 이름을 짓지 못함

const nameTag1 = baby1 ?? '1번 아기';
const nameTag2 = baby2 ?? '2번 아기';

console.log(nameTag1, nameTag2);

// let x = 0;
// let y = '';
// let z = null;

// x ||= 100;
// y &&= '있어야 바뀜';
// z ??= '기본값';

// console.log(x, y, z);


let x = 1;
let y = 19 === 3 + 4 * 2 ** ++x;

console.log(y);

console.log(
    2 > 3 || 4 % 2 === 0,
    2 > (3 || 4) % 2 === 0,
    2 > 3 || 4 % (2 === 0)
);