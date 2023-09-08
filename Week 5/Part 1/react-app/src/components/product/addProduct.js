import React, { useState } from 'react'
import axiosStore from '../../network/axiosStore'

// add New Product => http://localhost:3000/add
export default function AddProduct() {

   const[myProduct, setMyProduct]= useState({
        title: 'iphon 13',
        price: 900,
        description: 'iphone',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    })
    const addProduct=()=>{
        axiosStore.post("products",myProduct).then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
   <button className='btn btn-danger' onClick={()=>{addProduct()}}> add product</button>
  )
}
