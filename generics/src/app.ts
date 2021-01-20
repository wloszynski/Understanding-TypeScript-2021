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
// const mergedObj3 = merge({ name: "Tim" }, 20);

mergedObj.age;
mergedObj2.age;

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got " + element.length + " element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Sports", "Cooking"]));
console.log(countAndDescribe([]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({ name: "Tim" }, "name"));

class DataStorage<T extends string | boolean | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Tom");
textStorage.addItem("Tim");
textStorage.removeItem("Tim");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Tim" });
// objStorage.addItem({ name: "Tom" });

// objStorage.removeItem({ name: "Tim" });
// console.log(objStorage.getItems());
