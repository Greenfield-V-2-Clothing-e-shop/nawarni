import React from 'react';
import { Router } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:5000/cart/cart');
  const data = await res.data;

  return {
    props: { data: data },
  };
};

const cart = ({ data }: any) => {
  const [code, setcode] = useState("");
  console.log(data);
  let total = 0;



  return (
    <div>
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  Your items below
                </div>
              </div>
            </div>

            {data.map((e: any) => {
              {
                total = total + e.Price * 1;
              }
              return (
                <div className="row border-top border-bottom">
                  <div className="row main align-items-center">
                    <div className="col-2">
                      <img className="img-fluid" src={e.ImageUrl} />
                    </div>
                    <div className="col">
                      <div className="row text-muted">{e.Category}</div>
                      <div className="row">{e.Product}</div>
                    </div>
                    <div className="col"></div>

                    <div className="col">
                      {e.Price}$
                      <span className="close">
                        {' '}
                        <button
                          onClick={() => {
                            axios.delete(`http://localhost:5000/cart/${e._id}`);
                            window.location.reload();
                          }}
                        >
                          delete
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="back-to-shop">
           <Link href="/products">⬅️back to products</Link>
            </div>
          </div>
          <div className="col-md-4 summary ">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>

            <div className="row">
              <div className="col" style={{ paddingLeft: '0' }}>
                Total Price
              </div>
              <div className="col text-right">{total}</div>
            </div>
            <form>
              <p>SHIPPING</p>
              <select>
                <option className="text-muted">
                  Standard-Delivery- &euro;5.00
                </option>
              </select>
              <p>GIVE CODE</p>
              <input id="code" 
              placeholder="Enter your code" 
              onChange={(e) => setcode(e.target.value)}/>
              <button
            type="button"
            className="btn btn-outline-primary"
            onClick={(setcode:any)=>{
 

              if( setcode==="rakia"){
                console.log("hello")
                alert("you will pay 50%")
                return total=total/2
                
              }
            }}
          >
            try it
          </button>
            </form>
            <div
              className="row"
              style={{
                borderTop: '1px solid rgba(0,0,0,.1)',
                padding: '2vh 0',
              }}
            ></div>
            <button
              className="btn"
              onClick={() => {
                axios.delete(`http://localhost:5000/cart/cart`);
                window.location.href = '/';
              }}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
