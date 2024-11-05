{

   class inParent {
       constructor(public name: string, public age: string){}
       parent(){
          console.log(`this is ${this.name} age his ${this.age} that`)
       }
   }


   class inBaby extends inParent {
    constructor(public name: string, public age: string){
         super(name, age);
    }
   }
   const baby = new inBaby("gaddu", "12") 
   console.log(baby)
   baby.parent();
   









    
}