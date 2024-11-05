{


    
    type allGurds = string | number


    const gurds = (a: allGurds, b: allGurds): allGurds =>{

         if(typeof a === "number" &&  typeof b === "number" ){
             return a + b
         } else {
            return a.toString() + b.toString
         }

    }

    const Gruds = gurds(22, 33) 

    console.log(Gruds)



    // ---------------------------------------------------------



    type NormalUser = {

         name: string
          role: "admin vai"

    }

    type AdminUser = {

         name: string,
      

    }


    const UserZ = (user: NormalUser | AdminUser) =>{

           if('role' in user){
               console.log(`my ${user.name} is ${user.role}`)
           } else {
              console.log(`my ${user.name} `)
           }
    }    
    const normalU: NormalUser = {
        name: 'apon vai',
        role: 'admin vai'
    }

    const adUser: AdminUser = {
        name: 'apon vai'
    }
    UserZ(normalU)


   








    
}