import { User } from '../models/usersschema'

export  const userService = {
    currentUserInfo: async (id) => {
        try {
            const currentUser = Userser.find( ) 
        } catch (error) {
            console.log(`The user with this id does not exist `);
        }
    }
}