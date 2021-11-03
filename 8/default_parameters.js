"use strict";
// 기본 인자
function concatStringsDefault(a, b, c) {
    if (c === void 0) { c = "c"; }
    return a + b + c;
}
var defaultConcat = concatStringsDefault("a", "b");
console.log("defultConcat : " + defaultConcat);
