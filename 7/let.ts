let lValue = 2;
console.log(`lValue = ${lValue}`);

if (lValue == 2) {
    let lValue = 2001;
    console.log(`block scoped lValue : ${lValue}`);
}
console.log(`lValue = ${lValue}`);