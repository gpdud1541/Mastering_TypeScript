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