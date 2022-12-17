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
