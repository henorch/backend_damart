import User from '../models/userSchema.js'

export  const userService = {

    ListAllUser: async () => {
      try {
        const allUser = await User.find()
        return allUser
      } catch (error) {
        console.error(`users not available`);
        throw error
      }
    }, 
    getCurrentUser: async (email, password) => {
        try {
            const user = await User.findOne({ email });
    
            if (!user) {
              throw new Error('User not found');
            }
    
            const isPasswordValid = await user.comparePassword(password); 
    
            if (!isPasswordValid) {
              throw new Error('Invalid password');
            }
    
            return user;
          } catch (error) {
            throw new Error('Failed to fetch user');
          }
        },

    createUser: async (args) => {
        try{
            let user = new User ({
                ...args.input
            })
                user.save()
                return user;
                console.log(`user succefully create`);
            
        } catch(error){
            throw error
        }
    }
}