import mongoose from "mongoose";

const connectDB = async () => {
    try {
        let connection = await mongoose.connect(process.env.MONGODB_URL);
        console.info('MongoDB Connected')
    } catch (error) {
        console.log('err', error);
    }
//   return (
//     <div>
      
//     </div>
//   )
}

export default connectDB
