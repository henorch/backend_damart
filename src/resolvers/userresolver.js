import { userService } from "../services/usersService.js";

const Userresolver = {
    Query: {
        getAllUser: async () =>  {
            const allUser = await userService.ListAllUser()
            return allUser
        }
    },

    Mutation: {
        createNewUser : async (_, args) => {
            try {
                const newUser = await userService.createUser(args)
                return newUser
            } catch (error) {
                console.error(`user can not be created at the moment`);
                throw error;
            }
        },
        
        loginUser: async (_, { email, password }) => {
            try {
               const currentUser = await userService.getCurrentUser(email, password)
               return currentUser
               
            } catch (error) {
               console.error(`user can not be created at the moment`);
               throw error;
            }
           }  
    }
}

export default Userresolver;