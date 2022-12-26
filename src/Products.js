import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {dataStore}from './Store'
import { Spinner } from './Spinner'


export const Products = () => {
    const {loader,product}= useContext(dataStore)
    
  return loader ? <Spinner /> :<table className='table table-striped'>
  <thead>
    <tr>
    
      <th>Title</th>
      <th>Price</th>
      <th>Description</th>
      <th>Image</th>
      <th>Details</th>
      </tr>

  </thead>
  <tbody>
    {product.map((products)=>{
        
  
      return (
        <tr key={product.id}>
          
          <td className='border border-1  p-2'>{products.title.slice(0,30)}</td>
          <td className='border border- p-2'>{products.price}</td>
          <td className='border border-1 p-2'>{products.description.slice(0, 50)}</td>
          <td className='border border-1 p-2'><img className='w-20 h-20 object-cover'alt="" /><img src={products.image} alt='dd' width='20%' height='5%'></img></td>
          <td><Link to={`/ProductDetails/${products.id}`} className='btn btn-primary'>Details</Link></td>
          
        </tr>
      )
    })}
  </tbody>
</table>
}
