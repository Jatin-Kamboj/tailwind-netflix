/**
 * Day 6: Find whether a property exists in a object using .hasOwn()
 * No workarounds to use such as Object.prototype.hasOwnProperty.call(user, email)
 */

const user = { firstName: "Jatin", lastName: "Kamboj", age: 25 };

// true
console.log("Has firstName:", Object.hasOwn(user, "firstName"));

// false
console.log("Has email:", Object.hasOwn(user, "email"));
