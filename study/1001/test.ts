/* 문제 1. 문자열 변수 선언
설명: 이름을 저장하는 name이라는 변수를 선언하고, 타입을 지정하세요. 값은 "Alice"로 지정하세요. */

let name1: string = "Alice";
console.log(name1); 

/* 문제 2. 숫자와 boolean 타입
설명:
나이를 나타내는 age 변수는 숫자 타입
학생 여부를 나타내는 isStudent는 boolean 타입
타입을 지정하고 값을 각각 21, true로 설정하세요. */
let age1: number = 21;
let isStudent: boolean = true;
console.log(age1 , isStudent);

/* 문제 3. 함수 매개변수와 반환 타입
설명:
두 숫자를 받아서 더한 값을 반환하는 함수 add를 작성하세요.
매개변수와 반환값에 모두 타입을 지정하세요. */
function addFunc(num1:number, num2 : number) : number{
    return num1 + num2;
}

/* 문제 4. 배열 타입
설명:
숫자로 구성된 점수 배열 scores를 선언하고 [80, 90, 100]을 넣으세요.
배열의 타입을 명확히 지정하세요. */
let arr1: number[] = [80,90,100];

/* 문제 5. 객체 타입 정의
설명:
사람을 나타내는 객체 person을 선언하세요.

이름: 문자열
나이: 숫자
객체 리터럴에 타입을 직접 지정하세요.
{ name: string; age: number } 👉 객체 리터럴 타입
 */

// 인터페이스를 사용해서 객체의 구조를 정의
interface Person {
  name: string; // 타입
  age: number;
}
// 인터페이스를 사용해서 객체를 생성
const person: Person = {
  name: "홍길동",   //key - value
  age: 30,
};

let person2: { name: string; age: number } = {
  name: "홍길동",
  age: 25
};

console.log(person.name); // 홍길동
console.log(person.age);  // 25

let person3: {name:string, age: number} = {
    name: "kiti",
    age : 30,
};
console.log(person3.name);
console.log(person3.age);

/* 문제 6. 유니언 타입
설명:
id라는 변수는 숫자이거나 문자열일 수 있습니다.
적절한 타입으로 선언하고, "user123"을 할당하세요. */
let id: number | string;
id='user123';
console.log(id);

let id1 : number | string = 'djlsjd';
 /* 문제 7. 인터페이스 사용
설명:
Product라는 인터페이스를 선언하고

name: string
price: number
속성을 갖도록 한 뒤, 그 타입으로 객체를 만들어보세요. */
interface Product {
    name: string;
    price: number;
}
const product1:Product ={
    name : "과자",
    price : 3000
}
console.log(product1.name, product1.price);

/* 문제 8. 선택적 속성 (optional property)
설명:
User 인터페이스를 선언하고

name: string
email: string (선택적 속성)
을 갖도록 정의하세요. 그리고 email이 없는 사용자를 생성하세요. */
interface User{
    name : string;
    email ?: string;
}
const user1 : User = {
    name : '김미지',
    //email : '',
}
console.log(user1.name, user1.email);


/* 문제 9. 타입 별칭(Type Alias)
설명:
Point라는 타입 별칭을 만들어

x: number
y: number
을 포함하도록 하고, 객체를 하나 선언해보세요. */
type Point={
    x: number;
    y: number;
}
const point1: Point={
    x : 10,
    y : 20
}
console.log(point1.x, point1.y);

/* 문제 10. 함수 타입 정의
설명:
문자열을 받아 대문자로 반환하는 함수 toUpper를 함수 타입을 명시해서 작성하세요.

 */
const content: string = 'abcdefgh';
function toUpper(content: string): string{
    let upper: string = content.toUpperCase();
    return upper;
}
