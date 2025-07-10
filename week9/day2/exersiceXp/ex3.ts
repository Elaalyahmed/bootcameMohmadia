class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return "Some generic animal sound";
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Bark";
  }
}

const myDog = new Dog("Rex");
console.log(myDog.makeSound()); 
