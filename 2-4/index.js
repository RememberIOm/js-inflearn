console.log(
    '안녕하세요~' === "안녕하세요~",
    '안녕하세요~' === `안녕하세요~`,
    "안녕하세요~" === `안녕하세요~`,
    'Hello!' === 'hello!',
);

console.log(
    '1' == '1',
    '1' == 1,
    '1' == 2
);

console.log(
    '1' != '1',
    '1' != 1,
    '1' != 2
);

console.log(
    '1' === '1',
    '1' === 1,
    '1' === 2
);

console.log(
    '1' !== '1',
    '1' !== 1,
    '1' !== 2
);

console.log(
    'ABC' < 'abc',
    'apple' <= 'banana',
    '가나다' > '라마바',
    '안녕' >= '안녕'
);

// ⚠️ 숫자 문자열 관련 주의!
console.log(
    100 > 12, // 숫자는 그 자체로 비교
    '100' > '12', // 문자는 사전순으로 비교
    '100' > 12, // 문자와 숫자를 비교하면 문자를 숫자로 변환
);


// let str1 = 'Hello';

// // 값 반환
// let str2 = ' ' + 'World';

// console.log(str1);
// console.log(str2);

// let str3 = str1 + str2;

// console.log(str3);

// // 부수효과 없음
// console.log(str1);
// console.log(str2);

// // 값 반환
// console.log(str3 + '!!!' + ' ' + '😀');

// // 부수효과 없음
// console.log(str3);


let str1 = '헬로';
str1 += ' 월드';

// 부수효과
console.log(str1);

// 값 반환
let str2 = str1 += '~~~';

console.log(str2);

// 부수효과
console.log(str1);

// ⚠️ 오류. 왼쪽 값은 부수효과의 대상(변수)이어야 함
// let str = '헬로' += '월드';

// ⚠️ 오류. 왼쪽 값은 부수효과의 대상(변수)이어야 함
// const STR = '안녕~';
// STR += ' 반가워요!';


const lyric1 = '노는 게 제일 좋아'
    + '\n친구들 모여라'
    + '\n언제나 즐거워'
    + '\n개구쟁이 뽀로로';

console.log(lyric1);

let lyric2 = '눈 덮인 숲 속 마을';
lyric2 += '\n꼬마펭귄 나가신다';
lyric2 += '\n언제나 즐거워';
lyric2 += '\n뽀롱뽀롱뽀롱뽀롱 뽀로로';

console.log(lyric2);


let result = '안녕' + 1 + true;

console.log(result);
console.log(typeof result);

result += null;
result += undefined;

console.log(result);
console.log(typeof result);