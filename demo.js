function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.display = ()=>{
    console.log(`${this.brand} ${this.model}`);
  };
}

const car1 = new Car('Toyota', 'Camry');
car1.display(); // Output: Toyota Camry
