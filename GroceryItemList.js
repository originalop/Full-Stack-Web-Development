let grocesaryItemList = {
  name: "Apple",
  quantity: 4,
  display()
  {
    console.log(`${this.quantity}*${this.name}`);
  }
};

grocesaryItemList.display()