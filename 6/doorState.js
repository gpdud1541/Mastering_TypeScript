var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
    DoorState[DoorState["Ajar"] = 2] = "Ajar"; // 2
})(DoorState || (DoorState = {}));
var openDoor = DoorState.Open;
console.log("openDoor is : " + openDoor); // openDoor is : 0
var closeDoor = DoorState["Closed"];
console.log("closeDoor is : " + closeDoor); // closeDoor is : 1
var ajarDoor = DoorState[2];
console.log("ajarDoor is : " + ajarDoor); // ajarDoor is : Ajar
