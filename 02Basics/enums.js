// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2
var SeatChoice;
(function (SeatChoice) {
    // default starts with 0 and increment 1
    // you can put any value to each
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 11] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 12] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 13] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.FOURTH;
console.log(hcSeat);
