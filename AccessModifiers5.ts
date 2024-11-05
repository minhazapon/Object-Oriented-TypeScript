{



    class FoodName {

         
         constructor( private Food1: string, public food2: string, readonly food3: string ) {}

         foodZ(){

           console.log(`we are love ${this.Food1} ${this.food2}, ${this.food3}`)

         } 
    }


    const returant1 = new FoodName("biriryani", "beefKaba", 'chicken crim couf')
    const returant2 = new FoodName("chicken kabab", "beef and khecuri", 'mashroom crim souf')
    

    

    console.log(returant1)
    console.log(returant2)

    returant1.foodZ()











    
}