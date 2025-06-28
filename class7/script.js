// let obj = {
//     name: "Asad Ullah",
//     age: 20
// }

// console.log(obj)

// let animal = {
//   eats: true,
// };

// let lion = {
// //   eats: true,
//   roar: true,
// };

// console.log(lion);
// lion.__proto__ = animal;

// class Animal{
//     constructor(name){
//         this.name = name
//         console.log("animal created")
//     }
//     eats(){
//         console.log('eating')
//     }
// }

// class Lion extends Animal{
//     constructor(name){
//         super(name)
//         console.log("lion is here")
//     }

//     eats(){
//         console.log("lion eats meat")
//     }

//     roar(){
//         console.log('roaring')
//     }
// }

// let a = new Animal("bunny")
// let b = new Lion("lion")
// console.log(a, b)

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(`Hi, I’m ${this.name}`);
//   }
// }

// const p1 = new Person("Ramla");
// p1.sayHi();

// class Product {
//   constructor(price) {
//     this._price = price;
//   }

//   get price() {
//     return `$${this._price}`;
//   }
// }

// const item1 = new Product(100);
// const item2 = new Product(200);
// console.log(`${item1.price} ${item2.price}`);