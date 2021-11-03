# 고급 타입
### 공용체
2개 이상의 타입을 조합하는 표현식을 사용할 수 있음.  
파이브 기법(>) 사용? **|** 이걸로 바뀐 듯  
``` typescript
var unionType: string | number;
```
  
### 타입 가드
공용체 타입을 사용하는 경우, 컴파일러는 타입이 섞여 동작하지 않도록 강타입 규칙을 적용한다.

### 타입 별명
타입 공용체에 특별한 이름을 부여할 수 있음  
공용체 타입 표기를 편리하게 해주는 표기법. **type 키워드** 로 선언해 일반 타입처럼 사용 가능
``` typescript
type StringOrNumber = string | number;

function addWithAlias(
    arg1: StringOrNumber,
    arg2: StringOrNumber
) {
    return arg1.toString() + arg2.toString();
}
```
타입 별명은 함수 시그니처에도 사용할 수 있다.
``` typescript
type CallbackWithString = (arg1: string) => void;

function usingCallbackWithString(
    callback: CallbackWithString
) {
    callback("this is a string");
}
```
usingCallbackWithString 함수는 타입 별명(함수 시그니처)을 callback 인자의 타입으로 사용  
자주 사용하는 공용체 타입에 쉽고 직관적인 이름을 사용하는 방법을 제공함
  
### Null과 undefined