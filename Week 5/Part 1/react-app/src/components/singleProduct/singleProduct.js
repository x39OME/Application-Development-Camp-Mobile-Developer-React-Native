import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosStore from "../../network/axiosStore";
// import Image from '../../../node_modules/react-bootstrap/cjs/Image.d';

export default function SingleProduct() {
  const params = useParams();
  // console.log(params)
const [product,setProduct]=useState({})
  useEffect(() => {
    // axios
    //   .get(`https://fakestoreapi.com/products/${params.id}`)
    //   .then((res) => {
    //     console.log(res.data);
    //     setProduct(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    axiosStore
      .get(`products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const deleteProduct =(id)=>{
    axiosStore.delete(`products/${id}`).then((res)=>{
        console.log(res)
    }).catch((error)=>{
        console.log(error)
    })

  }


  return <>
  <div className="row">
    <div className="col-8">
        <img src={product.image}  alt={product.title} style={{width:"200px"}} />
        <h3 className="mt-3"> {product.title} </h3>
        <h5 className="mt-3">{product.category}</h5>
        <p className="mt-3"> {product.price} $</p>
    </div>
    <div className="col-4">
        <div>{product.description}</div>
    <div className="btn btn-danger" onClick={()=>{deleteProduct(params.id)}}> DELETE </div>
    </div>
    
  </div>
  </>
}
