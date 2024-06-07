import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/playtube`
    );
    console.log(
      `\n MongoDB connected !!! DB host: ${connectInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
