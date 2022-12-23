import React from 'react'
import { Router } from "next/router";
import {useState} from 'react'
import axios from 'axios';

export const getStaticProps=async()=>{
  const res=await fetch("http://localhost:5000/prod/prod")
  const data = await res.json()
  const tshirt=data.filter((e:any)=>e.Category==="t-shirt" )
  const Jean=data.filter((e:any)=>e.Category==="Jean" )
  const Baskets=data.filter((e:any)=>e.Category==="Baskets" )

return {
  props:{products:data,tshirt:tshirt,Jean:Jean,Baskets:Baskets}
}
}
const Products = (props:any) => {
 const add =(body :any)=>{
    axios.post("http://localhost:5000/cart/cart",body)
 }
  console.log(props.Baskets);

  console.log(props.Jean);
 
  console.log(props.products);
 console.log(props.tshirt);
 
const [prod,setProd]=useState(props.products)
console.log(prod)



  return (

<>


<div className='container px-4 px-lg-5 mt-5'>
<div className="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group mr-2 " role="group" aria-label="First group">
  <button type="button" className="btn btn-secondary" onClick={()=>setProd(props.products)}>All Category</button>
    <button type="button" className="btn btn-secondary"  onClick={()=>setProd(props.tshirt)} >t-shirt</button>
    <button type="button" className="btn btn-secondary" onClick={()=>setProd(props.Jean)}>Jean</button>
    <button type="button" className="btn btn-secondary" onClick={()=>setProd(props.Baskets)} >Baskets</button>
  </div>
</div>
  <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center '>
 {prod.map((e:any)=> 
 {return (<div key={e._id} className="card m-2 shadow-lg p-3 mb-5 bg-body rounded">
    <img src={e.ImageUrl} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{e.Product}</h5>
      <p className="card-text">{e.Description}</p>
      <p className="card-text"><small className="text-muted">{e.Price} $</small></p>
      <br />
      <button type="button" className="btn btn-secondary" 
      onClick={()=>{add({Product:e.Product,Category:e.Category,Description:e.Description,ImageUrl:e.ImageUrl,Price:e.Price })}}> 
      🛒 Buy Now</button>

    </div>
  </div>)})}
 </div></div>
  </>
  )
}

export default Products