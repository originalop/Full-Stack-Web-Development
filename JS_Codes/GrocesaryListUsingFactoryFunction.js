const itemList=(name, quantity)=> {
  return {
    name,
    quantity,
    display() {
      console.log(`${this.quantity}*${this.name}`);
    }
  };
}
const p1 = itemList("Apple", 40);
p1.display()
