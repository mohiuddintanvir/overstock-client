
import { useEffect, useState } from "react"

const useAdmin=email=>{
    const [IsAdmin,setisAdmin]=useState(false);
    const [isAdminloading,setisAdminloading]=useState(true);
    useEffect(()=>{
        if(email){
           fetch(`https://over-stcok-server.vercel.app/users/admin/${email}`) 
           .then(res=>res.json())
           .then(data=>{
            console.log(data)
            setisAdmin(data.isAdmin);
            setisAdminloading(false);

        })
        }
        
    },[email]);
    return [IsAdmin,isAdminloading]
   
}
export default useAdmin;