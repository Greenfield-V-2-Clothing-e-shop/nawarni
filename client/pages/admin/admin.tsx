import React from "react";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
// import Link from "next/link";

interface Products {
  Product: String;
  Category: String;
  Description: String;
  ImageUrl: String;
  Price: String;
  _id: String;
}

export default function admin(event: any) {
  const router = useRouter();
  // const { id } = router.query;
  const [products, setProducts] = useState<Products[]>([]);
  

  
  // const updateProduct = async () => {
  //   await axios.put(`http://localhost:5000/prod/${e._id}`)
  //                       .then((res) => {
  //                         console.log(res)})
  // }
  useEffect(() => {
    axios
      .get<Products[]>("http://localhost:5000/prod/prod")
      .then((response: AxiosResponse) => {
        // console.log(products);
        setProducts(response.data);
      });
  }, []);
  return (
    <div>
      <div className="cool">
        <button
          type="button"
          className="booton"
          onClick={() => {
            router.push("/admin/addProduct");
          }}
        >
          Add 
        </button>
      </div>

      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center ">
        {products.map((e: any) => {
          return (
            <div
              key={e._id}
              className="card m-2 shadow-lg p-3 mb-5 bg-body rounded"
            >
              <img src={e.ImageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{e.Product}</h5>
                <p className="card-text">{e.Description}</p>
                <p className="card-text">
                  <small className="text-muted">{e.Price} $</small>
                </p>
                <br />
                <button
                  type="button"
                  className="ba7lousD"
                  onClick={() => {
                    axios
                      .delete(`http://localhost:5000/prod/${e._id}`)
                      .then((res) => {
                        console.log(res);
                        window.location.reload;
                        console.log(e._id);
                      });
                  }}
                >
                  Remove
                </button>
                {/* <Link href={`edit/${e._id}`} query={e}> */}
                <button
                  type="button"
                  className="ba7lousU"
                  onClick={() => {
                    console.log(e._id);
                    router.push(`/admin/edit/${e._id}`);
                  }}
                >
                  Edit
                </button>
                {/* </Link> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
