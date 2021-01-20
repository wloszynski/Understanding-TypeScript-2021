// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
interface Named {
  readonly name?: string;
  // ? makes it optional field - no need to implement it
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

let user1: Greetable;
let user2: Greetable;

class Person implements Greetable {
  name?: string;
  age = 30;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log(phrase);
    }
  }
}

user1 = new Person("Tom");
user2 = new Person();
console.log(user2);

user1.greet("hello");
user2.greet("hi");
