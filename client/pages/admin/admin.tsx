import React from "react";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";

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

  const [products, setProducts] = useState<Products[]>([]);
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addProduct = async (event: any) => {
    try {
      event.preventDefault();
      await axios.post("http://localhost:5000/prod/prod", {
        Product: product,
        Category: category,
        Description: description,
        ImageUrl: image,
        Price: price,
      });

      router.push("/admin");
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className="container">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={addProduct} className="ba7lous ">
            <div className="mb-5">
              <label className="blok">Add Your Product :</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Choose Your Product"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={product}
                onChange={(element) => {
                  setProduct(element.target.value);
                }}
              />
            </div>
            <div className="mb-5">
              <label className="blok">Category :</label>
              <input
                type="text"
                name="text"
                id="email"
                placeholder="Category"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={category}
                onChange={(element) => {
                  setCategory(element.target.value);
                }}
              />
            </div>
            <div className="mb-5">
              <label className="blok">Image :</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your image url"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={image}
                onChange={(element) => {
                  setImage(element.target.value);
                }}
              />
            </div>
            <div className="mb-5">
              <label className="blok">Price $ :</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your Price here ..."
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={price}
                onChange={(element) => {
                  setPrice(element.target.value);
                }}
              />
            </div>

            <div className="mb-5">
              <label className="blok">Description :</label>
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Type your Description"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={description}
                onChange={(element) => {
                  setDescription(element.target.value);
                }}
              ></input>
            </div>
            <div>
              <button
                className="btn-add-p"
                type="submit"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
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
                        console.log(e._id);
                      });
                  }}
                >
                  Remove
                </button>
                <button type="button" className="ba7lousU">
                  Update
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
