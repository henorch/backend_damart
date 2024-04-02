import mongoose from "mongoose"
const mongooseUrl = "mongodb+srv://henorch01:fGwz0p9jJJbN5hUx@damart.3escttb.mongodb.net/?retryWrites=true&w=majority&appName=Damart"



const DatabaseConnection = async () => {
    try {
        await mongoose.connect(mongooseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        }).then(() => {
            console.log('Database successfully connected');
        })
    } catch (error) {
        console.log(error);
    }
}


module.exports = DatabaseConnection