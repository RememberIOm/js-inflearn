const person1 = {
    name: '김철수',
    age: 25,
    married: false
};

console.log(typeof person1);
console.log(person1);

console.log(
    person1.name,
    person1.age,
    person1.married
);

console.log(
    person1['name'], // 속성명을 string으로
    person1['age'],
    person1['married'],
);

console.log(person1.birthdate);
console.log(person1['job']);

console.log(
    'age' in person1,
    'job' in person1
);

// 특정 프로퍼티의 값 변경
person1.age = 26;
person1['married'] = true

console.log(person1);

// 새 프로퍼티 추가
person1.job = 'developer';
person1['bloodtype'] = 'AB'

console.log(person1);


// const winners = [12, 592, 7, 48];
// const weekdays = ['월', '화', '수', '목', '금', '토', '일'];

// // 자료형에 관계없이 한 배열에 넣을 수 있음
// const randoms = ['홍길동', -24, true, null, undefined];

// console.log(typeof winners);
// console.log(winners, weekdays, randoms);

// // 특정 순서의 값에 접근하는 법 (0부터 시작)
// console.log(winners[0], weekdays[6], randoms[3]);

// // 배열의 길이(요소의 갯수)를 얻는 법
// console.log(winners.length, weekdays.length, randoms.length);

// // 마지막 요소 얻기
// console.log(winners[winners.length - 1]);


const numbers = [1, 2, 3];

// 특정 위치의 값 수정
numbers[2] = 5;

console.log(numbers);

// 맨 끝에 값 추가
numbers.push(10);

console.log(numbers);

const winners = [12, 592, 7, 48];
console.log(winners[winners.length]);


const person2 = {
    name: '김달순',
    age: 23,
    languages: ['Korean', 'English', 'French'],
    education: {
        school: '한국대',
        major: ['컴퓨터공학', '전자공학'],
        graduated: true,
    }
};

console.log(person2.languages[2]);
console.log(person2.education.graduated);

const groups = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];

const weapons = [
    { name: '롱소드', damage: 30, design: ['화룡검', '뇌신검'] },
    { name: '활', damage: 12 },
    { name: '워해머', damage: 48 },
];

console.log(groups[1][2]);
console.log(weapons[2].damage);
console.log(weapons[0].design[0]);