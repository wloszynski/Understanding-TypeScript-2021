// const names = ["Tim", "Tom"];

// const names: any[] = [];
// const names: Array<string> = ["Tim", "Tom"]; // string[]
// names[0].split("");

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({ name: "Tim" }, { age: 20 }));
const mergedObj = merge({ name: "Tim" }, { age: 20 });
const mergedObj2 = merge({ name: "Tim", hobbies: ["Football"] }, { age: 20 });
const mergedObj3 = merge({ name: "Tim" }, 20);

mergedObj.age;
mergedObj2.age;
