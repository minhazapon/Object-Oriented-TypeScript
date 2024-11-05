{
    


     class Animal {

         makeSound(){

            console.log("ghew ghew")

         }

     }

     class dog extends Animal {
          
        makeSound(){
            console.log("Ghaaaaao")
        }

     }


     function AnimalSound(animal: Animal){

         animal.makeSound();

     }


     let animal = new Animal();
     let dg = new dog();

     AnimalSound(animal)
     AnimalSound(dg)


     




}