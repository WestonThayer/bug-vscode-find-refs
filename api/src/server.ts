import * as shared from "../../shared/src";

shared.foo.bar(); // .bar() - object property, does NOT work on first boot
console.log(shared.foo.baz); // .baz - object property, does NOT work on first boot
shared.cat(); // .cat() - exported function, works on first boot
shared.dog(); // .dog() - exported arrow function, does NOT work on first boot
const r: shared.Rabbit = { // Rabbit - interface, works on first boot
  leg: "leg" // leg - interface property, works on first boot
};
const eagle = new shared.Eagle(); // Eagle() - class constructor, works on first boot
eagle.fly(); // .fly() - class function, works on first boot
