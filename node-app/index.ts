interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

const user: User = {
  firstName: "Harsh",
  lastName: "Deep",
  email: "hdeep61034@gmail.com",
  age: 18,
};

function isLegal(user: User): boolean {
  if (user.age < 18) {
    return false;
  } else {
    return true;
  }
}

console.log(isLegal(user));
