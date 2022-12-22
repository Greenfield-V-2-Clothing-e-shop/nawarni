import {useRouter} from "next/router"
import react from "react"
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

interface Product {
  Product: String;
  Category: String;
  Description: String;
  ImageUrl: String;
  Price: String;

}


export default function SearchedProduct (){
  const [queery, getQueery]=useState<string>()
  const [filter,setFilter]=useState<any>([])
  
  
  const router= useRouter()
  const query = router.query 
  const search:any=query.searched
  var data:any=query.prods
  data = JSON.parse(data)

  console.log(data)
 


  
  const filterData =()=>{
    getQueery(search)
    const x = data.filter((e:any)=> e.Product.includes(search))
    console.log(x)
    return setFilter(x)
   }
  
   useEffect(()=> filterData(),[''])


return (
<>
<div className='container px-4 px-lg-5 mt-5'>
<div className="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">

</div>
  <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center '>
 {filter.map((e:any)=> 
 {return (<div key={e._id} className="card m-2 shadow-lg p-3 mb-5 bg-body rounded">
    <img src={e.ImageUrl} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{e.Product}</h5>
      <p className="card-text">{e.Description}</p>
      <p className="card-text"><small className="text-muted">{e.Price} $</small></p>
      <br />


    </div>
  </div>)})}
 </div></div>
  </>
  )
}