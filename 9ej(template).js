function template(user, age, id){return [user, age, id]};

const arr = template("carlopez", 23, 2);
console.log("hi my name " + arr[0] + ", i am " + arr[1] + "y/o");

console.log(`hi my name ${arr[0]}, i am ${arr[1]}y/o`);