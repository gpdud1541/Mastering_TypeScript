// 나머지 인자
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

function testNormalAndRestArguments(
    arg1: string,
    arg2: number,
    ...argArray: number[]
) {
}