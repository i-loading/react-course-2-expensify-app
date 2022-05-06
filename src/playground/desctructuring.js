/*
  --- Object destructuring ---
*/
// const person = {
//   name: "Ivan",
//   age: 19,
//   location: {
//     city: "Kharkiv",
//     temp: 20,
//   },
// };
// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}`);
// const { temp: temperature, city } = person.location;
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: "Book title",
//   author: "Ryan Gosling",
//   publisher: {
//     name: "Penguin",
//   },
// };
// const { name: publisherName = "Self-published" } = book.publisher;
// console.log(publisherName);

/*
  --- Array destructuring ---
*/
// const address = ["1299 S Juniper St.", "Philadelphia", "Pennsylvania", "19147"];
// const [, city, state = "New York"] = address;
// console.log(`You're in ${city}, ${state}`);

// const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
// const [name, , price] = item;
// console.log(`A medium ${name} costs ${price}`);
