{



    ///class in typeScript///////


    class FoodName {

        constructor(public name1: string, public name2: string, public name3: string){}
        food(){
            console.log(`ammar khub ${this.name1} ${this.name2} ${this.name3} valo lage`)
        }

    }

    const f1 = new FoodName("biriyani", "kabuli polaw", 'turkey kabab' )
    const f2 = new FoodName("nihari", "jhura haleem", "chicken fry")


    // console.log(f1, f2)
    
    f1.food();
    f2.food();



    ///////////inheritance typeScript////////


     class Father {

        constructor(public name: string, public age: string){}

        father(){
           
            console.log(`there info >>> name is ${this.name} and age is ${this.age} `)

        }

     }


     class Baby extends Father {

        constructor(public name: string, public age: string){
           
            super(name, age)

        }
     }

     const babyInfo = new Baby("babu", "12")
     const fatherInfo = new Father("Dabu", "40")

     console.log(babyInfo)
     console.log(fatherInfo)

     babyInfo.father()


     /////type gurds 


     type allGrd = string | number | undefined


     const gurd = ( a: allGrd, b: allGrd ): allGrd =>{

         if(typeof a === "number" && typeof b === "number"){
             
             return a + b
  
         } else {
             
            //  return a.toString() + b.toString()

         }
     }
     const G = gurd(20, 40)

     console.log(G)


     ////access modifier//////


     class Modify {

        constructor(public name: string, public profession: string, private location: string, readonly age: 23 ){}

         ModiInfo(){
           

            console.log(`info is >>>>. ${this.name} , ${this.profession} , ${this.location}`)

         }

     }


     const m1 = new Modify("ryan Dalh", "software developer", "earth", 23)

     console.log(m1)

     m1.ModiInfo()


}

    






