enum DoorState {
    Open,    // 0
    Closed,  // 1
    Ajar     // 2
}

var openDoor = DoorState.Open;
console.log(`openDoor is : ${openDoor}`); // openDoor is : 0

var closeDoor = DoorState["Closed"];
console.log(`closeDoor is : ${closeDoor}`); // closeDoor is : 1

var ajarDoor = DoorState[2];
console.log(`ajarDoor is : ${ajarDoor}`); // ajarDoor is : Ajar