console.log(true, typeof true);
console.log(false, typeof false);

// let a = 1 === 2;
// let b = 'abc' !== 'def'
// let c = a !== b;
// let d = typeof a === typeof b === true;

// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);
// console.log(d, typeof d);


console.log(
    true, !true, false, !false
);

console.log(
    true, !true, !!true, !!!true
);

console.log(
    false, !false, !!false, !!!false
);

console.log(
    true === !false,
    !(1 == '1'),
    !(1 === '1'),
    !(typeof false === 'boolean')
);


console.log(
    true && true,
    true && false,
    false && true,
    false && false,
);

console.log(
    true || true,
    true || false,
    false || true,
    false || false,
);

// let x = 14;
// // x = 6;
// // x = 25;

// console.log(
//     (x > 10 && x <= 20) || x % 3 === 0
// );

// 💡 드 모르간의 법칙
let a = true;
// a = false;
let b = true;
// b = false;

console.log(
    !(a && b) === (!a || !b),
    !(a || b) === (!a && !b)
); // 💡 항상 true


// let error = true;
// error = false;

// // 앞의 것이 true일 때만 뒤의 코드 실행
// error && console.warn('오류 발생!');

// // 앞의 것이 false일 때만 뒤의 코드 실행
// error || console.log('이상 없음.');

// let x = true;
// // x = false;

// // ⭐️ &&, || 연산자는 값 자체를 반환
// let y = x && 'abc';
// let z = x || 123;

// console.log(y, z);


// let x = true;
// // x = false;

// let y = x ? '참입니다.' : '거짓입니다.';
// console.log(y);

let num = 103247;

console.log(
    'num은 3의 배수' +
    (num % 3 === 0 ? '입니다.' : '가 아닙니다.')
);

let error = true;
error = false;

error
    ? console.error('오류 발생!')
    : console.log('이상 없음');

console.log(
    1.23 ? true : false,
    -999 ? true : false,
    '0' ? true : false,
    ' ' ? true : false,
    Infinity ? true : false,
    -Infinity ? true : false,
    {} ? true : false,
    [] ? true : false,
);

// ⚠️ true와 `같다`는 의미는 아님
console.log(
    1.23 == true,
    ' ' == true,
    {} == true
);

console.log(
    0 ? true : false,
    -0 ? true : false,
    '' ? true : false,
    null ? true : false,
    undefined ? true : false,
    NaN ? true : false,
);

// 💡 어떤 값들은 false로 타입변환됨
console.log(
    0 == false,
    0 === false,
    '' == false,
    '' === false
);
console.log(
    null == false,
    undefined == false,
    NaN == false,
);

// let x = 0;
// let y = 1;

// x && x++;
// y && y++;

// console.log(x, y);

// let x = 2;
// let y = 3;

// console.log(
//     x % 2 ? '홀' : '짝',
//     y % 2 ? '홀' : '짝'
// );

// let x = '';
// let y = '회사원';
// let z = x || y;

// console.log(z);

// x = x || '단기알바';
// y = y || '단기알바';

// console.log(x, y);


// 한 번 부정
console.log(
    !1, !-999, !'hello',
    !0, !'', !null
);

// ⭐️ 두 번 부정하여 해당 boolean값으로
console.log(
    !!1, !!-999, !!'hello',
    !!0, !!'', !!null
);

let x = 123;

console.log(
    'x는 홀수인가?',
    !!(x % 2)
);