# 함수
### 함수 반환 타입
"편의 문법"으로 함수가 반환하는 변수의 타입을 정의할 수 있음.  
``` typescript
function addNumbers(a: number, b: number) :string { // 반환 타입 문자열
    // return a + b; // error
    return (a + b).toString();
}
var addResult = addNumbers(2, 3);
console.log(`addNumbers returned : ${addResult}`);
```
  
### 익명 함수
+ javascript
``` javascript
var addVar = function(a, b) {
    return a + b;
}
var addVarResult = addVar(2, 3);
console.log("addVarResult : " + addVarResult); // addVarResult: 5
```
+ typescript
``` typescript
var addFunction = function(a: number, b: number): number {
    return a + b;
}
var addFunctionResult = addFunction(2, 3);
console.log(`addFunctionResult : ${addFunctionResult}`); // addFunctionResult : 5
```
  
### 선택적 인자
표기하는 방법: **?(물음표)**  
``` typescript
function concatStrings(a: string, b: string, c?: string) {
    return a + b + c;
}
```
※ 선택적 인자는 함수 정의에서 인자의 마지막에만 사용 가능.  
비선택적 인자가 선택적 인자 앞에만 있다면 선택적 인자는 몇 개든 사용할 수 있음.  
  
### 기본 인자
선택적 인자 구문의 약간의 변형을 통해 변수의 기본값 설정할 수 있음  
c: string = "c". 기본값을 사용해 c에 해당하는 인자에 값이 없으면 기본값 "c"를 사용  
※ 기본 인자를 사용하면 기본값을 갖는 선택적 인자가 자동으로 만들어 지는 점을 유의.  

### 나머지 인자
자바스크립트에서는 arguments 라는 특수 변수로 함수에 들어온 모든 인자에 접근할 수 있다.
``` javascript
function testArgumnets() {
    if (arguments.length > 0) {
        for (var i = 0; arguments.legnth; i++) {
            console.log("argument[" + i + "] = " + arguments[i]);
        }
    }
}
testArguments(1, 2, 3);
testArguments("firstArg");

// result
// arguments[0] = 1
// arguments[1] = 2
// arguments[2] = 3
// arguments[0] = firstArg
```
타입스크립트에서 같은 함수 선언을 사용하려면 나머지 인자 문법을 사용해야 한다.  
나머지 인자는 함수 선언에서 가변 개수 인자를 **3개의 점(...)**으로 표시한다.
``` typescript
function testArguments(... argArray: number []) {
    if (argArray.length > 0) {
        for (var i = 0; i < argArray.length; i++) {
            console.log(`argArray[${i}] = ${argArray[i]}`);
            // 자바스크립트의 arguments 변수를 사용
            console.log(`arguments[${i}] = ${arguments[i]}`);
        }
    }
}

testArguments(9);
testArguments(1, 2, 3);
```
※ argArray와 arguments의 다른 점은 **추론된 타입**이다.  
argArray는 명시적으로 숫자로 선언했기 때문에 숫자 배열로 취급한다.  
하지만 arguments는 추론된 타입이 없으므로 any 타입이다.  
  
나머지 인자는 함수 인자 목록의 마지막에 넣으면 일반적인 함수 인자와 함께 사용할 수 있다.
``` typescript
function testNormalAndRestArguments(
    arg1: string,
    arg2: number,
    ...argArray: number[]
) {
}
```
  
### 함수 콜백
자바스크립트의 강력한 기능 : **콜백**  
인자로 전달되는 함수로 보통 함수 안에서 실행됨. 함수에 값을 전달하는 것처럼 함수에 함수를 전달할 수 있다.  
+ javascript
``` javascript
var callbackFunction = function(text) {
    console.log('inside callbackFunction ' + text);
}
function doSomethingWithCallback(initialText, callback) {
    console.log('inside doSomethingWithCallback ' + initialText);
    callback(initialText);
}

doSomethingWithCallback('myText', callbackFunction);
doSomethingWithCallback('myText', 'anotherText'); // error: callback is not a function
```
+ 결과
```
inside doSomethingWithCallback myText
inside callbackFunction myText
```
인자로 들어온 callback 변수가 실제로는 함수라고 가정하고 initialText를 인자로 호출한다.

인자로 들어온 callback이 진짜로 함수인지 확인한 후에 실행한다.
``` javascript
function doSomethingWithACallback(initialText, callback) {
    console.log('inside doSomethingWithCallback ' + initialText);
    if (typeof callback === "function") {
        callback(initialText);
    } else {
        console.log(callback + ' is not a function!!');
    }
}
doSomethingWithACallback('myText', 'anotherText');
```
+ 결과
```
inside doSomethingWithACallback myText
anotherText is not a function!!
```
※ 콜백 사용 시 주의사항
1. 콜백이 잘못 들어오는 경우에 대비해야 한다.
2. 콜백 인자를 이해하고 문서화해야 한다.

### 함수 시그니처
일반 변수에 강타입을 추가하는 **"편의 문법"**은 콜백 함수에도 사용할 수 있다.  
() => 형태의 굵은 화살표 문법을 도입, 함수에 대한 인자는 함수여야 한다.
``` typescript
callback : (initialText: string) => void
```
**콜론(: 타입)** 문법으로 타입을 갖고 굵은 화살표 구문 **() =>** 으로 인자의 타입이 함수임을 표시한다.  
**void**는 함수의 반환값이 없음을 나타내는 키워드  
※ 함수 시그니처에서 인자의 이름은 달라도 된다. 인자의 수, 타입, 반환값의 타입만 같으면 됨  
  
이것은 타입스크립트의 강력한 기능!  
+ 함수 시그니처를 코드에서 정의하고 정의와 다른 인자로 호출하면 경고를 보낸다.
+ 외부 함수, 클래스, 객체를 사용하려면 함수 시그니처를 정의해야 한다.
+ 함수 선언 파일에 이런 함수 정의를 저장하며, .d.ts라는 파일 확장자를 가진다.

### 함수 오버로드
+ 자바스크립트 예제
``` javascript
function add(x, y) {
    return x + y;
}
console.log('add(1, 1) = ' + add(1, 1));            // add(1, 1) = 2
console.log('add("1", "1") = ' + add("1", "1"));    // add("1", "1") = 11
```
1. 처음 두 줄의 함수 시그니처에는 함수 본문이 없음
2. 마지막 함수 선언에서는 any를 사용하고 함수 본문을 포함함  
함수를 오버로드하려면 이 표기법을 따라야 함, 
함수 본문을 포함하는 마지막 함수 시그니처는 any 타입 인자를 사용해야 컴파일 오류가 발생하지 않는다.
3. 마지막 함수 본문이 any 타입을 사용하더라도 함수 시그니처는 숨겨짐  
add 함수는 문자열과 숫자만 사용할 수 있음
``` javascript
console.log(`add(true, false) = ${add(true, false)}`); // error
```