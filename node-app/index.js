"use strict";
// interface User {
//   firstName: string;
//   lastName: string;
//   email: string;
//   age: number;
// }
//
// const user: User = {
//   firstName: "Harsh",
//   lastName: "Deep",
//   email: "hdeep61034@gmail.com",
//   age: 18,
// };
//
// function isLegal(user: User): boolean {
//   if (user.age < 18) {
//     return false;
//   } else {
//     return true;
//   }
// }
//
// console.log(isLegal(user));
//
//
// interface UserArray {
//   firstName: string;
//   lastName: string;
//   age: number;
// }
//
// function userinfo(arr: UserArray[]) {
//   for (let i = 0; i < arr.length; i++) {
//     const user = arr[i];
//     console.log(
//       user.firstName + " " + user.lastName + " is " + user.age + " year old.",
//     );
//   }
// }
//
// const users = [
//   { firstName: "Harsh", lastName: "Deep", age: 18 },
//   { firstName: "Harshit", lastName: "Pundir", age: 18 },
//   { firstName: "Sudhanshu", lastName: "Sodiyal", age: 19 },
// ];
//
// userinfo(users);
//
//
var Directions;
(function (Directions) {
    Directions["up"] = "UP";
    Directions["down"] = "Down";
    Directions["left"] = "Left";
    Directions["right"] = "Right";
})(Directions || (Directions = {}));
function gamelogic(keypressed) {
    if (keypressed == Directions.up) {
        console.log("Player Jumped");
    }
    else if (keypressed == Directions.down) {
        console.log("Player Couched");
    }
    else if (keypressed == Directions.right) {
        console.log("Player Moved Forwad!");
    }
    else if (keypressed == Directions.left) {
        console.log("Player Moved Backwards!");
    }
}
gamelogic(Directions.up);
gamelogic(Directions.down);
gamelogic(Directions.left);
gamelogic(Directions.right);
console.log(Directions.up);
console.log(Directions.down);
