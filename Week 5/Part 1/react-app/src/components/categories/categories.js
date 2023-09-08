import React, { useEffect, useState } from 'react'
import axiosStore from '../../network/axiosStore'
import { Link } from 'react-router-dom'
// import Categories from './categories'; 

export default function Categories() {
   const [cate,setCate]= useState([])
   useEffect(()=>{
    axiosStore.get("products/categories").then((res)=>{
        console.log(res)
        setCate(res.data);
    }).catch((error)=>{
        console.log(error)
    })
   },[])
  return (
   <>
{
    cate.map((categorie)=>{
        return<h5><Link to={`/cate/${categorie}`}>{categorie}</Link></h5>

    })
}
   </>
  )
}
