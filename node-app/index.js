"use strict";
const user = {
    firstName: "Harsh",
    lastName: "Deep",
    email: "hdeep61034@gmail.com",
    age: 18,
};
function isLegal(user) {
    if (user.age < 18) {
        return false;
    }
    else {
        return true;
    }
}
console.log(isLegal(user));
