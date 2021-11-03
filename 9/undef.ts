// Null과 undefined
function testUndef(test: null | number) {
    console.log('test parameter : ' + test);
}

// testUndef(); // error

let x: number | undefined;

x = 1;
x = undefined;
// x = null; // error