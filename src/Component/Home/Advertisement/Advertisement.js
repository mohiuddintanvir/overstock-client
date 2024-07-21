import React, { useEffect, useState } from 'react';
import Advertise from './advertise/Advertise';

const Advertisement = () => {
const [advertised,setadvertisement]=useState([])

useEffect(()=>{
    fetch('https://over-stcok-server.vercel.app/categories')
    .then(res=>res.json())
    .then(data=>{
        
        setadvertisement(data)
    })
},[])


    return (
        <div>
            
 {
    advertised.map(adver=>
        <Advertise adver={adver}></Advertise>)
 }
        </div>
    );
};

export default Advertisement;