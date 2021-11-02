const enum DoorStateConst{
    Open,
    Closed,
    Ajar
}
var constDoorOpen = DoorStateConst.Open;

console.log(`constDoorOpen is : ${constDoorOpen}`);
console.log(`${DoorStateConst[0]}`); // error
console.log(`${DoorStateConst["Open"]}`);