// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Adrian",
//   age: 20,
// };

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Adrian",
  age: 20,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// person.role.push("admin");
// person.role[1] = 10;

person.role = [0, "admin"];

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
