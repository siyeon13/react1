//function 함수명(매개변수: 타입): 반환타입 { ... }
// function 함수명(매개변수: 타입): 반환타입 { ... }

function greet(name: string) : string {
    //return "Hello, " + name;
    return `Hello,  ${name}`;
}

console.log(greet("john"));

//# typescript 기본 자료형
//# 숫자
let age: number =20;
age  = 20.3;
//age = "20";


const PI : number = 3.14;

//#문자열
let nickname: string = "John";
nickname ="Dog"


// 불리언
let isActive: boolean = true;