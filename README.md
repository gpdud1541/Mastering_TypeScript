# Mastering_TypeScript

------------
### 캡슐화
객체지향 언어의 기본 원칙, 하나의 컴포넌트에서 데이터와 데이터를 사용하는 기능 집합 정의
``` typescript
class MyClass {
    add(x, y) {
        return x + y;
    }
}
var classInstance = new MyClass();
var result = classInstance.add(1, 2);
console.log(`add(1, 2) returns ${result}`);

var MyClass = (function() {
    // 클로저가 환경을 기억하는 자체 실행 함수
    function MyClass() {
        // MyClass의 내장 함수
        // 클로저
    }    
    MyClass.prototype.add = function(x, y) {
        return x + y;
    };
    return MyClass;
}());
var classInstance = new MyClass();
var result = classInstance.add(1, 2);
console.log("add(1, 2) returns " + result);

// 퍼블릭, 프라이빗 접근자
class CountClass {
    private _count: number;
    constructor() {
        this._count = 0;
    }
    countUp() {
        this._count++;
    }
    getCount() {
        return this._count;
    }
}
var countInstance = new CountClass();
countInstance._count = 17; // 오류 발생 : Property '_count' is private and only accessible within class 'CountClass'.
```
타입스크립트는 클래스 정의를 자바스크립트 클로저로 변환한다.

------------
### 노드 기반 컴파일
```
npm install -g typescript // npm i -g typescript
tsc -v // 버전
tsc hello.ts // 자바스크립트로 컴파일
tsc --init // tsconfig.json 파일 생성
```