function Demo(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    console.log(`${this.name}:${this.quantity}`);
  };
}
const obj = new Demo("Apple", 20);
obj.display();
