const map =new Map(); // key - value
map.set('1002', '조깅1, 팔굽혀펴기1');
map.set('1003', '조깅2, 팔굽혀펴기2');
map.set('1004', '조깅3, 팔굽혀펴기3');
console.log(map.get('1002'));
console.log(map.get('1003'));
console.log(map.get('1004'));

// 중복 값 제거
const set = new Set();
set.add("1002");
set.add("1003");
set.add("1002");
console.log(set.has("1002"));
console.log(set.size);

//for ... of 반복문 실습
for(const val of set){      // set
    console.log(val); 
}

for(const val of map){      // map
    console.log(val);       // key value 둘다 출력
}
for(const val of map.values()){     // 맵 안에 value값들만 가지고옴
    console.log(val);
}
for(const key of map.keys()){
    console.log(key);
}
// 키 값을 사용해서 값만 출력
for(const val of map.keys()){   // 키값이 val 에 들어감
    console.log('키값으로 val 출력 : ' +map.get(val));  // 키값을 get 해서 value값을 가지고 옴 
}

// * 구조분해할당 _같은 더미값을 작성하면 -> 해당 값을 사용하지 않는다는 표현.
for(const [key, _] of map){        // value값을 안씀
    console.log(key);
}
for(const [_, val] of map){         // key값을 안씀ㅔ
    console.log(val);
}
// 고차 배열 메서드

const nums = [1, 2, 3, 4];

// map : 배열을 map으로 순회 
const value = nums.map(n => n*2); 
console.log(value);

// filter : 구하려는 값을 필터링해주는
const evens = nums.filter(n => n % 2 === 0); // [2, 4]  // 
const evens2 = nums.filter(m => m % 2 !== 0);
console.log(evens2);

// reduce : 값을 누적해서 계산(더해주는) 기능 / 0 은 초기값
const sum = nums.reduce((acc, cur) => acc + cur, 0); // 10
const sum1 = nums.reduce((acc, cur) => acc + cur, 0);

// find : 조건에 해당하는 값을 찾는거 가장 가까운 값만 찾음
const found = nums.find(n => n > 2); // 3
const found1 = nums.find(n => n > 2);

// some : 하나라도 포함된게 있는지 없는지 확인
const hasNegative = nums.some(n => n < 0); // false
const hasPositive = nums.some(n => n > 0);

// every : 전부 다 포함되는 지 확인
const allPositive = nums.every(n => n > 0); // true

// flatMap : 차수를 낮춰서 표현
const nested = [1, 2, 3];
const duplicated = nested.flatMap(n => [n, n]); // [1,1,2,2,3,3]

// [실습]

const arr = [1,2,3,4];

const squares = arr.map(n => n ** 2);
console.log(`squares : ${squares}`);


const evens3 = arr.filter(n => n % 2 === 0);
console.log(`even3 : ${evens3}`);

const reduceSum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(`reduceSum : ${reduceSum}`);

const found2 = arr.find(n => n > 2);
console.log(`found2: ${found2}`);

const hasNegative1 = arr.some(n => n < 0);
console.log(`hasNegative1 : ${hasNegative1}`);
const allPositive1 = arr.every(n => n > 0);
console.log(`allPositive1 : ${allPositive1}`);
const nested1 = arr.flatMap(n => [n, n]);
console.log(`nested1 : ${nested1}`);


// 비동기 처리 : async/wait
async function greet() {
  return "Hello"; // 자동으로 Promise로 감싸짐
}
greet().then(console.log); // Hello 
// then : callback 함수

//7️⃣ 실습 과제 : 과제 1: 간단한 비동기 함수 만들기

//구조 분해 + 스프레드
// 구조 분해 : 
const user = {
    name: "mai",
    age: 30,
    city: "korea"
}
const {name, age, city} = user;     // 구조분해문법 : 각각 객체안에 요소를 받아와서 사용하는게 아니라 바로 사용 가능하게
// user.name -> 이렇게 안함 


// 스프레드
const user2 = {
    ...user,
    name: 'Jane',   // name 의 값을 덮어 씌우는 거 스프레드 아래에 둬야한다.
    job: 'doctor',
}