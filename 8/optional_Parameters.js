"use strict";
// 선택적 인자
function concatStrings(a, b, c) {
    return a + b + c;
}
var concat3strings = concatStrings("a", "b", "c");
console.log("concat3strings : " + concat3strings);
var concat2strings = concatStrings("a", "b");
console.log("concat2strings : " + concat2strings);
var concat1strings = concatStrings("a"); // error
