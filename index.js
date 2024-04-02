import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

// importimg typeDefs and resolver
import typeDefs from "./src/typeDefs/index.js"
import productResolver from "./src/resolvers/productsResolver.js"
import orderResolver from "./src/resolvers/orderResolver.js"
import Userresolver from "./src/resolvers/userresolver.js"


const server = new ApolloServer({
     typeDefs, 
    resolvers: [productResolver, orderResolver, Userresolver]
})


const { url } = await startStandaloneServer(server, {
    listen:{port: 4003}
})


console.log(`server now running on ${url}`);