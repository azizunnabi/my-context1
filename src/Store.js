import React from 'react'
import {useEffect,useState,createContext} from "react"
import axios  from 'axios'
export  const dataStore= createContext()
const Store = (props) => {
    const[product, setProduct] = useState({})
    const[loader, setLoader] = useState(true)
    const [productDet, setProductDet]=useState({})

    useEffect(function(){
        axios.get("https://fakestoreapi.com/products").then(function(yourData){
            setLoader(false)
            setProduct(yourData.data)
        }).catch(function(error){
            setLoader(false)
            console.log(error)
        })},[])

        const getProduct = (id) => {
            setLoader(true)
            axios.get(`https://fakestoreapi.com/products/${id}`).then(({data})=> {
                setLoader(false)
              setProductDet(data);
            }
              ).catch((err)=>{
                setLoader(false)
                console.log(err)
        
              })
          }
  return (
    <div>
        <dataStore.Provider value={{loader,product,productDet,setProductDet,getProduct}}>
            {props.children}
        </dataStore.Provider>
    </div>
  )
}
export default Store