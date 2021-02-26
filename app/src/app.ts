import * as shared from "../../shared/src";

shared.foo.bar();
console.log(shared.foo.baz);
shared.cat();
shared.dog();
const r: shared.Rabbit = {
  leg: "leg"
};
const eagle = new shared.Eagle();
eagle.fly();
