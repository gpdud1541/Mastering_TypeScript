// 기본 인자
function concatStringsDefault(
    a: string,
    b: string,
    c: string = "c"
) {
    return a + b + c;
}

var defaultConcat = concatStringsDefault("a", "b");
console.log(`defultConcat : ${defaultConcat}`);