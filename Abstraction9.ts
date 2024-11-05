{



    abstract class read {

        constructor(public name: string){
        }


        disPlay() : string {

           return "hello JavaScript"
             
        }

        abstract find(name: string):any;
   
    }  


    class Students extends read {

        sId: number;
        constructor(name: string, sId: number){
            super(name)
            this.sId = sId
 
        }
        find(name: string) {
            return `student name is ${name} `
        }


    }


    let s1 = new Students('good student', 1999)
    console.log(s1.sId)


    console.log(s1.find('mark'))


















}