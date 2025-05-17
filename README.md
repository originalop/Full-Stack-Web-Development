# constructor in JS
**In JavaScript, a function constructor is a special way to create objects using a function. It's called a "constructor" because it's used to construct new instances of an object type, similar to classes in other object-oriented languages.**
>Syntax:
>```
>function Person(name, age) {
> this.name = name;
> this.age = age;
>}
>const person1 = new Person('Alice', 30);
>```
**How it works?**
When you use new Person('Alice', 30):
1. A new empty object is created.
2. The this keyword in the Person function refers to that new object.
3. The properties (name, age) are assigned to that object.
4. The object is returned automatically.
**Example:**
```
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.display = function() {
    console.log(`${this.brand} ${this.model}`);
  };
}

const car1 = new Car('Toyota', 'Camry');
car1.display(); // Output: Toyota Camry
```
---
# Factory function:
**Defination: A factory function in JavaScript is a function that returns a new object every time it is called. It is a simple and flexible way to create multiple instances of similar objects without using classes or the `new` keyword.**
>Syntax:
>```
>function createUser(name, age) {
>  return {
>    name,
>    age,
>    greet() {
>      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
>    }
>  };
>}
>const user1 = createUser("Alice", 30);
>const user2 = createUser("Bob", 25);
>user1.greet(); // Hi, I'm Alice and I'm 30 years old.
>user2.greet(); // Hi, I'm Bob and I'm 25 years old.
>```
