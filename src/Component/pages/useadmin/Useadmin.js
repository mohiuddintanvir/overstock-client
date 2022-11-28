import { isAdmin } from "@firebase/util";
import { useEffect, useState } from "react"

const useAdmin=email=>{
    const [IsAdmin,setisAdmin]=useState(false);
    useEffect(()=>{
        if(email){
           fetch(`http://localhost:5000/users/admin/${email}`) 
           .then(res=>res.json())
           .then(data=>{
            console.log(data)
            setisAdmin(data.isAdmin);

        })
        }
        
    },[email]);
    return [isAdmin]
}
export default useAdmin;