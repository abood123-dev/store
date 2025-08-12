import  { useEffect, useState } from 'react';
import type { item } from './Home'; 
import { useParams } from 'react-router-dom';
const Details = () => {
    const {id} = useParams();
    const [Oneitem,setone]=useState<item>();
    useEffect(()=>
        {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>setone(data))
        })
  return (
    <div key={Oneitem?.id}>
     <div>{Oneitem?.description}</div>
    </div>
  )
}

export default Details
