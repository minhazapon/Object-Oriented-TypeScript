{



     
    class FoodName {

         
        constructor( private Food1: string, public food2: string, public food3: number ) {}
        get foodZ(){

             return this.food2   
        }

        set Acount(amount: number){

             this.food3 + amount

            //  console.log(`${this.Acount}`)

        }

   }

   
   const returant1 = new FoodName("biriryani", "beefKaba", 20)
   const returant2 = new FoodName("chicken kabab", "beef and khecuri", 40)

   const f2 = returant1.foodZ
   console.log(f2)

   returant2.Acount=50      

   const a = returant2.Acount
   console.log(a)















    
}