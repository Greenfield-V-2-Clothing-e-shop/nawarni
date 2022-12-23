import React, {useState} from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';





function addProduct() {
    const router = useRouter();
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

        router.push("/admin/admin");
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <div>
      <div className="container">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={addProduct} className="ba7lous ">
            <div className="mb-5">
              <label className="blok"> Product :</label>
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
              <label className="blok"> Category :</label>
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
              <label className="blok"> Image :</label>
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
              <label className="blok"> Price $ :</label>
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
              <label className="blok"> Description :</label>
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
              <button className="btn-add-p" type="submit">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default addProduct