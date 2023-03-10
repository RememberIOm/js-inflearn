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

// π‘ λ λͺ¨λ₯΄κ°μ λ²μΉ
let a = true;
// a = false;
let b = true;
// b = false;

console.log(
    !(a && b) === (!a || !b),
    !(a || b) === (!a && !b)
); // π‘ ν­μ true


// let error = true;
// error = false;

// // μμ κ²μ΄ trueμΌ λλ§ λ€μ μ½λ μ€ν
// error && console.warn('μ€λ₯ λ°μ!');

// // μμ κ²μ΄ falseμΌ λλ§ λ€μ μ½λ μ€ν
// error || console.log('μ΄μ μμ.');

// let x = true;
// // x = false;

// // β­οΈ &&, || μ°μ°μλ κ° μμ²΄λ₯Ό λ°ν
// let y = x && 'abc';
// let z = x || 123;

// console.log(y, z);


// let x = true;
// // x = false;

// let y = x ? 'μ°Έμλλ€.' : 'κ±°μ§μλλ€.';
// console.log(y);

let num = 103247;

console.log(
    'numμ 3μ λ°°μ' +
    (num % 3 === 0 ? 'μλλ€.' : 'κ° μλλλ€.')
);

let error = true;
error = false;

error
    ? console.error('μ€λ₯ λ°μ!')
    : console.log('μ΄μ μμ');

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

// β οΈ trueμ `κ°λ€`λ μλ―Έλ μλ
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

// π‘ μ΄λ€ κ°λ€μ falseλ‘ νμλ³νλ¨
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
//     x % 2 ? 'ν' : 'μ§',
//     y % 2 ? 'ν' : 'μ§'
// );

// let x = '';
// let y = 'νμ¬μ';
// let z = x || y;

// console.log(z);

// x = x || 'λ¨κΈ°μλ°';
// y = y || 'λ¨κΈ°μλ°';

// console.log(x, y);


// ν λ² λΆμ 
console.log(
    !1, !-999, !'hello',
    !0, !'', !null
);

// β­οΈ λ λ² λΆμ νμ¬ ν΄λΉ booleanκ°μΌλ‘
console.log(
    !!1, !!-999, !!'hello',
    !!0, !!'', !!null
);

let x = 123;

console.log(
    'xλ νμμΈκ°?',
    !!(x % 2)
);