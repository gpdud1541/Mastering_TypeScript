// =======================================================
// 캡슐화
// =======================================================
// class MyClass {
//     add(x, y) {
//         return x + y;
//     }
// }
// var classInstance = new MyClass();
// var result = classInstance.add(1, 2);
// console.log(`add(1, 2) returns ${result}`);
//
//                     ↓
//
// var MyClass = (function() {
//     // 클로저가 환경을 기억하는 자체 실행 함수
//     function MyClass() {
//         // MyClass의 내장 함수
//         // 클로저
//     }    
//     MyClass.prototype.add = function(x, y) {
//         return x + y;
//     };
//     return MyClass;
// }());
// var classInstance = new MyClass();
// var result = classInstance.add(1, 2);
// console.log("add(1, 2) returns " + result);
/* 타입스크립트는 클래스 정의를 자바스크립트 클로저로 변환한다. */
// =======================================================
// 퍼블릭, 프라이빗 접근자
// =======================================================
// class CountClass {
//     private _count: number;
//     constructor() {
//         this._count = 0;
//     }
//     countUp() {
//         this._count++;
//     }
//     getCount() {
//         return this._count;
//     }
// }
// var countInstance = new CountClass();
// countInstance._count = 17; // 오류 발생 : Property '_count' is private and only accessible within class 'CountClass'.
console.log("hello TypeScript");
