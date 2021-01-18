// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Adrian",
//   age: 20,
// };

const person = {
  name: "Adrian",
  age: 20,
  hobbies: ["Sports", "Cooking"],
};

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
