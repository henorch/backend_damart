import  Product  from '../models/productSchema.js'


export const productService = {

    getAllProduct: async () => {
        try {
            const products = await Products.find({})
            return products
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    searchProuctbyString: async (contain) => {
        try {
            const searchProducts = await Products.find({contain})
            return searchProducts
        } catch (error) {
            console.error(`product you are search for is currently unavailable`);
            throw error;
        }
    },
    searchProductbyPrice: async (price) => {
        try {
            const priceSearch = await Products.find(price == Products.price === price)
            return priceSearch
        } catch (error) {
            console.error(`There is no product in that price range `);
            throw error;
        }
    }     
     
        
} 

