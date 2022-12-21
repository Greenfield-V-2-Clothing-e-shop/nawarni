
//@ts-nocheck
import React , { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function update() {
  const [form, setForm] = useState({});

  const router = useRouter();
  const ID = router.query.id;
  useEffect(() => {
    const getOne = () => {
      axios
        .get(`http://localhost:5000/prod/${ID}`)
        // console.log(router.query.id);
        .then((response) => {
          console.log(response.data, "________________");
          setForm(response.data);
        });
    };
    getOne();
  }, [router]);

  const handleChange = (e)=>{
    setForm({ ...form,

      [e.target.name]:e.target.value
    })
  }
console.log(form);
const E =()=>{
axios
      .put(`http://localhost:5000/prod/${ID}`, form)
      .then((res) => {
        alert("hello world");
      router.push("/admin/admin");
      })
        
        
}

  return (
    <div>
      <div className="container">
        <div className="mx-auto w-full max-w-[550px]">
          <form className="ba7lous " onSubmit={E}>
            <div className="mb-5">
              <label className="blok"> Product :</label>
              <input
                type="text"
                name="Product"
                onChange={handleChange}
                placeholder="Choose Your Product"
                defaultValue={form.Product}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="blok"> Category :</label>
              <input
                type="text"
                name="Category"
                onChange={handleChange}
                defaultValue={form.Category}
                placeholder="Category"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="blok"> Image :</label>
              <input
                type="text"
                name="ImageUrl"
                 defaultValue={form.ImageUrl}
                placeholder="Enter your image url"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label className="blok"> Price $ :</label>
              <input
                type="text"
                name="Price"
                 defaultValue={form.Price}
                onChange={handleChange}
                placeholder="Your Price here ..."
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label className="blok"> Description :</label>
              <input
                type="text"
                name="Description"
                 value={form.Description}
                onChange={handleChange}
                placeholder="Type your Description"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></input>
            </div>
            <div>
              <button type="submit" className="ba7lousU">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default update;
