function addWithUnion(arg1, arg2) {
    // return arg1 + arg2; // error : 문자열인지 숫자인지 모름
}
function addWithTypeguard(arg1, arg2) {
    // 타입가드
    if (typeof arg1 === "string") {
        // 이 블록에서 arg1은 문자열로 처리
        console.log('first argument is a string');
        return arg1 + arg2;
    }
    // 타입가드
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        // 이 블록에서 arg1과 arg2는 숫자로 처리
        console.log('both arguments are numbers');
        return arg1 + arg2;
    }
    console.log('default return');
    return arg1.toString() + arg2.toString();
}
console.log("addWithTypeGuard(1, 2) = " + addWithTypeguard(1, 2));
console.log("addWithTypeGuard(\"1\", \"2\") = " + addWithTypeguard("1", "2"));
console.log("addWithTypeGuard(1, \"2\") = " + addWithTypeguard(1, "2"));
