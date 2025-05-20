let programmer={
    name: "Rakesh",
    preferredLanguage: "JS",
    writeCode: function (){
        console.log(`${this.name} writes ${this.preferredLanguage}`);
    },
    drinkCoffe()
    {
        console.log(`${this.name}   drinks coffee`);
    }
};
programmer.writeCode()
programmer.drinkCoffe()
