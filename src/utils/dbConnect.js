import mongoose from "mongoose"


const DatabaseConnection = async (url) => {
    try {
        await mongoose.connect(url).then(() => {
            console.log('Database successfully connected');
        })
    } catch (error) {
        console.log(error);
    }
}



export default DatabaseConnection