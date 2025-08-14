import  { useEffect, useState } from 'react';
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
    const [loading, setLoading] = useState(true);
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
         setLoading(false);
      }
      )
    },[])
    if (loading) {
    return <div className="loading">Loading just wait few seconds ...</div>;
  }


  return (
    <div>
      <h1 className='our'>Our store</h1>
      <div className='sss'>
      <input className='search' placeholder='search for your prodect' value={search} onChange={(e)=>handlesearch(e.target.value)}/>
         <button onClick={sortAsc}>Sort Price ↑</button>
      <button onClick={sortDesc}>Sort Price ↓</button>
      <button onClick={showall}>Show all</button>
      </div>
      <div className='items'>
      {Items.map((item:item)=>
        {
            return(
            <>
            <Link key={item.id} to={`/details/${item.id}`}>
            <div className='item'>  
            <img src={item.image} className='itemimg'/>  
            <div>Title : {item.title}</div> 
            <div> category : {item.category}</div>
            <div>price : {item.price}</div>
            </div>   
           </Link>            
            </>
            )
        })}
        </div>
    </div>
  )
}

export default Home
