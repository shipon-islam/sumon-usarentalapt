import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const connectMongo = async () => {
  const conn = await mongoose.connect(process.env.DATABASE_URL);
  console.log("mongo db connected");
};

export default connectMongo;
