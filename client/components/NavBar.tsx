import React from "react";
import { useState, useEffect } from "react";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { userAgent } from 'next/server';
import axios, { AxiosResponse } from "axios";
import { useRouter } from 'next/router'

interface Product {
  Product: String;
  Category: String;
  Description: String;
  ImageUrl: String;
  Price: String;

}

const NavBar = (event:any) => {
  const router = useRouter()
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);
  const [products, setProducts]= useState<any>([])
  const [search, getSearch]=useState<string>('')
  // Check if the user is authenticated


const getProducts = async()=>{
  try {
    const res = await axios.get('http://localhost:5000/prod/prod');
    const data= res.data
    setProducts(JSON.stringify(data))
    return {data}
  } catch(error){
    return {error}
  }
}

console.log(search)

  useEffect(() => {
    getProducts()
    if (userIsAuthenticated) {
      setUserIsAuthenticated(true);
    }
  }, []);



  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      {/* <img src="http://res.cloudinary.com/dqz0n291c/image/upload/c_scale,h_70,w_100/v1671042018/trendy_cairap.png" alt="" style={{height: '70px'}} /> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav"  >
          <a style={{ marginLeft: '15%' }} className="nav-item nav-link " style={{color:'white'}} href="/" ><h4>Home</h4> </a>
          <a style={{ marginLeft: '15%' }} className="nav-item nav-link" style={{color:'white'}} href="/products"><h4>Products</h4></a>
          <a style={{ marginLeft: '15%' }} className="nav-item nav-link" style={{color:'white'}} href="/cart"><h4>Cart</h4></a>
          <a style={{ marginLeft: '15%' }} className="nav-item nav-link" style={{color:'white'}} href="/Contact"><h4>Contact</h4></a>

        </div>
      </div>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=> getSearch(e.target.value)} /> 
      </form>
        <button type="button" 
        style={{backgroundColor:"transparent", borderColor:"transparent"}}
        onClick={() => {
        router.push({
          pathname: "/SearchedProduct",
          query: {
          searched:search,
          prods:products
        }
        })
      }} >🔎</button>
      
      <div className="navbar-nav" style={{ height: "60%", width: "20%", marginLeft: "10%" }} >
        {/* {userAgent.role} */}
        {!userIsAuthenticated && (
        <a className="nav-item nav-link " href="/login" ><h4>Login</h4> </a> )}
        <a className="nav-item nav-link " href="/signup" ><h4>Signup</h4> </a>
         
        {!userIsAuthenticated &&(
          <a className="nav-item nav-link " href="/login"  ><h4></h4> 
          <img src="https://i.ibb.co/Snf4TSY/logout-16-1.png" style={{height:"30px",width:'30px'}} />
        
        
        </a>)}
      </div>
    </nav>
  )
}

export default NavBar