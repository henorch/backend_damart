import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

// importimg typeDefs and resolver
import typeDefs from "./src/typeDefs/index.js"
import productResolver from "./src/resolvers/productsResolver.js"
import orderResolver from "./src/resolvers/orderResolver.js"
import Userresolver from "./src/resolvers/userresolver.js"
import DatabaseConnection from "./src/utils/dbConnect.js"
import { config } from "./src/utils/config.js"

//dot env 

//The database connection file is done right here 
DatabaseConnection(config.mongoUrl)
const server = new ApolloServer({
     typeDefs, 
    resolvers: [productResolver, orderResolver, Userresolver]
})


const { url } = await startStandaloneServer(server, {
    listen:{port: config.port}
})


console.log(`server now running on ${url}`);