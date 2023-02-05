// let number1 = 1;
// let string1 = 'ABC';
// let bool1 = true;

// let number2 = number1;
// let string2 = string1;
// let bool2 = bool1;

// number2 = 2;
// string2 = '가나다';
// bool2 = false;

// console.log('~1:', number1, string1, bool1);
// console.log('~2:', number2, string2, bool2);


// const obj1 = {
//     num: 1, str: 'ABC', bool: true
// };
// const obj2 = obj1;
// // obj2 = {}; // ⚠️ 오류

// console.log('obj1:', obj1);
// console.log('obj2:', obj2);

// // ⭐️ const임에도 내부 값은 변경 가능함 주목
// // 내부 변경 방지는 이후 배울 Object.freeze 함수로
// obj2.num = 2;
// obj2.str = '가나다';
// obj2.bool = false;

// console.log('obj1:', obj1);
// console.log('obj2:', obj2);


// const array1 = [1, 'ABC', true];
// const array2 = array1;
// // array2 = []; // ⚠️ 오류

// console.log('array1:', array1);
// console.log('array2:', array2);

// // ⭐️ const임에도 내부 값은 변경 가능함 주목
// array2[0] = 3;
// array2[1] = 'def';
// array2[2] = false;

// console.log('array1:', array1);
// console.log('array2:', array2);


let number1 = 1;
number2 = number1;
number2 = 2;

console.log(number1, number2);


const obj1 = {
    num: 1,
    str: 'ABC',
    bool: true
};

const obj2 = obj1;

obj2.num = 2;

console.log(obj1, obj2);


const array1 = [1, 'ABC', true];
const array2 = array1;

array2[1] = '가나다';

console.log(array1, array2);