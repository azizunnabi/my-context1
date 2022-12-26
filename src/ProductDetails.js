import React from 'react'
import { useParams} from "react-router-dom"
import { useContext,useEffect, useState} from 'react'
import { dataStore } from './Store'
import { Spinner } from './Spinner'

export const ProductDetails = (props) => {
    const {product,loader,productDet,setProductDet,getProduct}= useContext(dataStore)
   
    useEffect(() => {
        getProduct(id);
        
  
    }, [])
  return loader ? (<Spinner />):( <div className="container">
        
  <div className="mt-10">
      <img className="img img-responsive" src={productDet?.image} alt="" width='20%' height='8%'/>
  </div>
      <hr></hr>
  <div className="pl-[40px] mt-10">

      <div>
          <h1>Title: {productDet?.title}</h1>
      </div>
      <div>
          <h3>Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{productDet?.price}$</h3>
      </div>
      <div>
          <div className="d-inline-flex"><b>Description: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>{productDet?.description?.slice(0, 80)}...</p></div>
      </div>
      <div className="d-inline-flex flex-row">
          <h1>Quantity</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <button className='btn btn-success pr-12'  >Inc</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <input className="form-control px-2" type="text" width='100%' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <button className='btn btn-danger px-10'  >Dec</button>
  </div>
  <div className="mt-7">
  <button className="btn btn-success" >Add To Cart</button>
  </div>
  
  </div>
 
</div>)
}
