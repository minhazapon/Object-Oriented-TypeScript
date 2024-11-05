{

     


       class Counter {

         static count: number = 0;

         increment(){
           
            return (Counter.count = Counter.count + 1)

         }
         decrement(){

            return ( Counter.count = Counter.count - 1 )

         }

       }


       const c1 = new Counter();
       console.log(c1.increment())
    

       const c2 = new Counter();
       console.log(c2.decrement())
   

    
}