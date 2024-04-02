import User from "../models/userSchema.js";

const Userresolver = {
    Query: {
        getUserByEmailAndPassword: async (_, { email, password }) => {
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
          }
    }
}

export default Userresolver;