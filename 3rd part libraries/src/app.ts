// import _ from "lodash";

import "reflect-metadata";
import { plainToClass } from "class-transformer";

import { Product } from "./product.model";

// declare var GLOBAL: any;
// console.log(_.shuffle([1, 2, 3]));

// const p1 = new Product("A Book", 12.99);
// console.log(p1.getInformation());

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.9 },
];

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
