export const userTypeDef = `#graphql

type User {
    id: ID!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    username: String!
} 

input createNewInput {
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    username: String!

}

input logInUSer {
    email: String,
    password: String
}

type Query {
    getAllUser: [User]!

}

type Mutation {
    createNewUser(input: createNewInput): User!
    loginUser( input: logInUSer ): User!
}
`