import { productService } from '../services/productService.js'


const productResolver = {
    Query:{
        products: async () => {
            return await productService.getAllProducts()
        },
        searchProuctbyString: async (_, {contain}) => {
            return await productService.searchProuctbyString(contain)
        },
        searchProductbyPrice: async (_, {price}) => {
            return await productService.searchProductbyPrice(price)
        }
    }
}

export default productResolver;