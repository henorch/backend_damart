import  Product  from '../models/productSchema.js'


export const productService = {

    getAllProduct: async () => {
        try {
            const products = await Product.find({})
            return products
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    searchProuctbyString: async (contain) => {
        try {
            const searchProducts = await Product.find({contain})
            return searchProducts
        } catch (error) {
            console.error(`product you are search for is currently unavailable`);
            throw error;
        }
    },
    searchProductbyPrice: async (price) => {
        const query = {}
        try {
            if(price != undefined ) query.price = { ...query.price, $lte : price } 
            const priceSearch = await Product.find(query)
            return priceSearch
        } catch (error) {
            console.error(`There is no product in that price range `);
            throw error;
        }
    }     
     
        
} 

