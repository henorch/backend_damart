const productTypeDef = `#graphql
    enum Categories {
        KITCHEN _AND_CATERING
        CLOTHING_AND_WARE
        WINE_AND_LIQUORS
        ELECTRONIC_AND_GADGET
        COSTMESTICS_AND_BEAUTY
        OTHERS
        FURNITURE_AND_INTERIORS 
    } 

    type products {
        id: ID!
        code: String!
        name: String!
        price: Float!
        image: String!
        description: String!
        category: Categories!
        make:String!
    }

    type Query {
        products: [products!]!
        searchProuctbyString(contain: String): [products!]!
        searchProductbyPrice(price: Float): [products!]!
    }
`

export default productTypeDef;