const express =require('express')
const mongoose= require('mongoose')
const app =express()
const cors =require('cors')
const PORT = 5000
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/user')
const ProdRoutes = require('./routes/prod')
const CartRoutes = require('./routes/cart')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
require('dotenv').config()
app.use('/user',userRoutes)
app.use('/prod',ProdRoutes)
app.use('/cart',CartRoutes)


app.use(cookieParser())
const db = "mongodb+srv://Ahmedhenchiri:UvZZCyLXCJU7in18@cluster0.yzf24ly.mongodb.net/trendy-shop?retryWrites=true&w=majority";
mongoose.set('strictQuery', true)
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((res) =>{
    console.log('Database in connect ');
})

.catch((err) =>console.log(err))
app.listen(PORT,()=>{
    console.log(`your server listen in port ${PORT}` );
})






{/* <div className="flex items-center justify-center p-12">
 
  <div className="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST"
    onSubmit={addProduct}>
      <div className="mb-5">
        <label
          
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Add Your Product
        </label>
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
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Category
        </label>
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
        <label
          
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Image
        </label>
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
        <label
          
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Price $
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your image url"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          value={price}
           onChange={(element) => {
                    setPrice(element.target.value);
                  }}
        />
      </div>
      
      
      <div className="mb-5">
        <label
          
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Description
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
           value={description}
                  onChange={(element) => {
                    setDescription(element.target.value);
                  }}
        ></textarea>
      </div>
      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none" type="submit"
        >
          Add Product
        </button>
      </div>
    </form>
  </div>
</div> */}

