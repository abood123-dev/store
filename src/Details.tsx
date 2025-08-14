import  { useEffect, useState } from 'react';
import type { item } from './Home'; 
import { useParams } from 'react-router-dom';
const Details = () => {
    const {id} = useParams();
    const [Oneitem,setone]=useState<item>();
        const [loading, setLoading] = useState(true);
    useEffect(()=>
        {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>
              {
                setone(data)
                setLoading(false);
              })
        },[])
        if (loading) {
    return <div className='loading'>Loading just wait few seconds ...</div>;
        }
  return (
    <div key={Oneitem?.id} className='itemm'>
      <h2 className='details'>Item Details</h2>
      <img src={Oneitem?.image} className='itemimg'/>
      <div>title: {Oneitem?.title}</div>
      <div>category: {Oneitem?.category}</div>
     <div>description: {Oneitem?.description}</div>
     <div>price: {Oneitem?.price}</div>
    </div>
  )
}

export default Details
