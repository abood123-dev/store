import React, { useEffect, useState } from 'react'
interface item
{
    id:number,
    description:string,
    price:number,
    image:string,
    title:string,
    category:string
}
const Home = () => {
    const [Items,setitems]=useState<item[]>([]);
    useEffect(()=>
    {
      fetch('https://fakestoreapi.com/products')
      .then(res=> res.json())
      .then(data=> setitems(data))
    })
  return (
    <div>
      <h1>Our store</h1>
      <input placeholder='search for your prodect'/>
      {Items.map((item:item)=>
        {
            return(
            <>
            <div key={item.id}>
            <img src={item.image}/>    
            <div>{item.title}</div> 
            <div>{item.category}</div>
            <div>{item.price}</div>   
           </div>            
            </>
            )
        })}
    </div>
  )
}

export default Home
