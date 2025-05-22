function groceryItems(name,quantity){
    this.name=name;
    this.quantity=quantity;
    this.display=function(){
        console.log(`Item: ${this.name}`);
        console.log(`Quantity: ${quantity}`);
    };
}
const obj=new groceryItems("Apple",20);
obj.display();