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
//
//                     ↓
//
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
countInstance._count = 17;
// 오류 발생 : Property '_count' is private and only accessible within class 'CountClass'.
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


------------
### 그런트
자동 수행 도구, 타입스크립트 파일을 수정할 때 자동으로 tsc 컴파일러가 실행  
노드 환경에서 동작함, npm 설치해야 함
```
npm init
npm i -g grunt-cli
npm i grunt --save-dev // 프로젝트 디렉터리에 지역 버전의 그런트 설치
npm i grunt-exec --save-dev
npm i grunt-contrib-watch --save-dev
```
  
GruntFile.js 필요함. 타입스크립트가 아닌 자바스크립트 파일로 만들어야 함.
``` javascript
module.exports = function(grunt) {
    // npm 작업 로드
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    // 실행할 작업 설정(pkg 속성, watch 속성, exec 속성)
    grunt.initConfig({
        // npm init 으로 만든 package.json 파일 로드
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['**/*.ts'], // 감시할 파일 지정(모든 .ts 파일)
            tasks: ['exec:run_tsc'] // 파일이 변경되면 실행할 작업 지정
        },
        exec: {
            run_tsc: { cmd: 'tsc' }
        }
    });
    grunt.registerTask('default', ['watch']); // 파일 변경을 감시할 기본 작업 지정
};
```


------------
### 타입스크립트
자바스크립트에 강타입을 추가.
* 오류 확인하기 쉬움.
* 코드를 제안하고 자바스크립트에 객체지향 기술을 도입       

#### 1. 기본 타입  
* 타이핑  
자바스크립트는 실행 중에 객체나 변수를 재할당할 수 있다.  
(ex: 숫자를 넣어 계산하는 함수에 문자열을 넣을 경우)  
``` javascript
function doCalculation(a, b, c) {
    return (a * b) + c;
}
var result = doCalculation(2, 3, 1);
console.log('doCalculation(): ' + result);
// doCalculation(): 7
```  
``` javascript
var result = doCalculation("2", "3", "1");
console.log('doCalculation(): ' + result);
// doCalculation(): 61
```  
  
타입스크립트는 강타입 언어로, string 타입으로 선언한 변수에는 문자열만 들어갈 수 있음.  
타입을 어기면 컴파일러는 자동으로 오류를 발생시키고, 어느 줄에서 오류가 발생했는지 알려준다.  
  
* 타입 구문  
변수 이름 뒤에 콜론(:) 기호를 넣고 타입을 표시한다.
``` typeScript
function doCalculation(
    a: number,
    b: number,
    c: number
) {
    return (a * b) + c;
}
var result = doCalculation(3, 2, 1);
console.log('doCalculation(): ' + result);

// error
var result = doCalculation("3", "2", "1");
console.log('doCalculation(): ' + result);
```  
변수의 타입과 다른 타입의 값을 할당하려고 하면 타입스크립트 컴파일러는 컴파일 오류를 발생시킨다.  
대입 연산자(=)의 왼쪽에 있는 변수 타입과 오른쪽의 변수 타입이 일치해야 한다.  
  ``` typeScript
var myString: string;
var myNumber: number;
var myBoolean: boolean;
myString = "1";
myNumber = 1;
myBoolean = true;

// error
myString = myNumber;
myBoolean = myString;
myNumber = myBoolean;

// 수정
myString = myNumber.toString();
myBoolean = (myString === "test");
if (myBoolean) { myNumber = 1; }
```  
* 타입 추론  
변수가 처음 사용될 때 변수의 타입을 결정해 이후 코드에서 사용한다.
``` typescript
var inferredString = "this is a string";
var inferredNumber = 1;
inferredString = inferredNumber
```
콜론(: 타입) 구문으로 변수 타입을 지정하지 않으면  
첫 번째 할당되는 타입을 기준으로 변수 타입을 추론한다.  

* 덕 타이핑  
오리처럼 생겼고, 오리처럼 꽥꽥댄다면 오리로 보는 것.
``` typescript
var complexType = { name: "myName", id: 1 };
complexType = { id: 2, name: "anotherName" };
```
컴파일러는 덕 타이핑으로 다시 할당한 객체를 검사하여  
같은 속성을 가진 객체라면 같은 타입으로 본다.  
  
덕 타이핑에 맞지 않는 변수를 할당했을 때
``` typescript
var complexType = { name: "myName", id: 1 };
complexType = { id: 2 };
```
id는 있지만 name 속성이 없는 객체를 항당하면 컴파일 오류가 발생한다.  
없는 속성을 넣어도 오류를 발생한다.  
  
* 템플릿 문자열