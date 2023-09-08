import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axiosStore from '../../network/axiosStore';
import { Link } from 'react-router-dom'

export default function SingleCategorie() {
    const params=useParams();
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axiosStore.get(`products/category/${params.name}`).then((res)=>{
console.log(res)
setProducts(res.data)
        }).catch((error)=>{
console.log(error)
        })
    },[])
  return (
    <>
    <div className='row row-cols-3'>

{products.map((product)=>{
return<div className='col' key={product.id}> 
    
    <div className="card">
  <img src={product.image} className="card-img-top" alt="..." style={{width:"150px",height:"150px"}} />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.price} $</p>
    <Link to={`/single/${product.id}`}> Product details </Link>
  </div>
</div>
    
</div>
})}

</div>
    
    </>
  )
}
