// For example, suppose you have an object type Person with name and age properties:
interface Person {
   name: string;
   age: number;
}

//You can use keyof to obtain the union of the string literal types "name" and "age":
type PersonKeys = keyof Person; // "name" | "age"

// You can then use this type in a generic constraint to restrict a type parameter to be one of the keys of Person:

function getProperty<T, K extends keyof T>(obj: T, key: K) {
   return obj[key];
}

let person: Person = { name: "Alice", age: 30 };
let nam = getProperty(person, "name"); // string
let age = getProperty(person, "age"); // number
// let invalid = getProperty(person, "invalid");

// Error: Argument of type '"invalid"' is not assignable to parameter of type '"name" | "age"'

// In this example, the getProperty function takes a type parameter T for the object type, and a type parameter K that extends the keyof T type to ensure that key is a valid key of obj. This allows the function to retrieve a property from the object using the key argument.

// Using keyof in generic constraints can help you write more generic and reusable code that can operate on specific properties of an object in a type-safe manner.