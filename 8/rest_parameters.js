"use strict";
// 나머지 인자
function testArguments() {
    var argArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argArray[_i] = arguments[_i];
    }
    if (argArray.length > 0) {
        for (var i = 0; i < argArray.length; i++) {
            console.log("argArray[" + i + "] = " + argArray[i]);
            // 자바스크립트의 arguments 변수를 사용
            console.log("arguments[" + i + "] = " + arguments[i]);
        }
    }
}
testArguments(9);
testArguments(1, 2, 3);
function testNormalAndRestArguments(arg1, arg2) {
    var argArray = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        argArray[_i - 2] = arguments[_i];
    }
}
