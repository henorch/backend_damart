import mongoose from "mongoose"; 
const Schema = mongoose.Schema

const productSchema =  new mongoose.Schema({
         name: {
           type: String,
           required: true,
           trim: true     
        },
        price:{
           type: Number,
           required: true,
           min:0 
        },
        image: [{
           type: String,
           description: String   
        }],
        description: {
           type: String,
           required: true,   
        },
        make:{
           type: String,   
        },
})

const Product = mongoose.model('Product', productSchema)
export default Product