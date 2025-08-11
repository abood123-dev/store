import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export interface item
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
     const [Seconditems,setsecond]=useState<item[]>([]);
    const [search,setsearch]=useState<string>("");
    const handlesearch=(value:string)=>
      {
        setsearch(value);
        const filteredItems= Seconditems.filter((item:item)=>
    item.category.toLowerCase().includes(value.toLowerCase()) ||
    item.title.toLowerCase().includes(value.toLowerCase()));
    setitems(filteredItems);
  }
  const sortAsc = () => {
  const sorted = [...Items].sort((a, b) => a.price - b.price);
  setitems(sorted);
};

    const sortDesc = () => {
  const sorted = [...Items].sort((a, b) => b.price - a.price);
  setitems(sorted);
    }
    const showall=()=>
      {
        setitems(Seconditems);
      }
    useEffect(()=>
    {
      fetch('https://fakestoreapi.com/products')
      .then(res=> res.json())
      .then(data=> 
      {
        setitems(data);
        setsecond(data);
      }
      )
    },[])
  


  return (
    <div>
      <h1>Our store</h1>
      <input placeholder='search for your prodect' value={search} onChange={(e)=>handlesearch(e.target.value)}/>
         <button onClick={sortAsc}>Sort Price ↑</button>
      <button onClick={sortDesc}>Sort Price ↓</button>
      <button onClick={showall}>Show all</button>
      {Items.map((item:item)=>
        {
            return(
            <>
            <Link key={item.id} to={`/details/${item.id}`}>  
            <div>{item.title}</div> 
            <div>{item.category}</div>
            <div>{item.price}</div>   
           </Link>            
            </>
            )
        })}
    </div>
  )
}

export default Home
