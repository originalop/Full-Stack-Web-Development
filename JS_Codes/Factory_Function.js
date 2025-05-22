// Factory function used to create new object.
function createObject(name, student,collegeName,companyName)
{
    return{
        name,
        student,
        display(){
            console.log(`My name is ${this.name}`);
            if (student){
                console.log(`I'm student at ${collegeName}`);
            }
            else
            {
                console.log(`I'm working at ${companyName}.`)
            }
        }
    };
}
const obj=createObject("Sakshi",false,"COEP","TCS");
obj.display();