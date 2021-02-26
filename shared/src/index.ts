export const foo = {
  bar: () => {
    console.log("bar called");
  },
  baz: "BAZ"
}

export function cat() {
  console.log("cat");
}

export const dog = () => {
  console.log("dog")
};

export interface Rabbit {
  leg: string;
}

export class Eagle {
  private foo: string;

  constructor() {
    this.foo = "foo";
  }

  fly() {
    console.log(this.foo);
  }
}
