import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosStore from '../../network/axiosStore'
// import { Link, Outlet, useNavigate } from 'react-router-dom'
// import WomenProduct from './womenProduct';


export default function Product() {
//   const navigate=  useNavigate();

//   const navigatToHome=()=>{
//     navigate(1)
//   }
//   const navigatToMen=()=>{
//     navigate("/product/men")
//   }
//   const navigatToWomen=()=>{
//     navigate("/product/women")
//   }
const[products,setProducts]= useState([])
useEffect(()=>{
// axios.get('https://fakestoreapi.com/products',{
//     params:
//     {limit:9,
//     sort:"desc"}
// }).then((res)=>{
// console.log(res.data)

// setProducts(res.data)

// }).catch((error)=>{
//     console.log(error)
// })
 
axiosStore.get('/products',{
    params:{limit:9}
}).then((res)=>{
    console.log(res.data)
    
    setProducts(res.data)
    
    }).catch((error)=>{
        console.log(error)
    })




},[])

  return (
 <>
{/* <div className='d-flex'>    <div onClick={()=>{navigatToMen()}}>men</div>
    <div className="ms-5"onClick={()=>{navigatToWomen()}}>women</div></div>

   
   <Outlet /> */}
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

//