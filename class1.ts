{

   class Animal {

       constructor( public name: string, public food: string, public sound: string ){
        }

        RunBaby(){
    
          console.log(`ei shalar${this.name} ja door mar ${this.food} kheye ne`)

        }

   }


   const dog = new Animal("neri Kiutta", "aborjona", " ghau ghau ghewoooooo") 
   const cat = new Animal("kalo biral", "fish har", "meeeewwwww" ) 

//    console.log(dog)
//    console.log(cat)
   
  cat.RunBaby();





}