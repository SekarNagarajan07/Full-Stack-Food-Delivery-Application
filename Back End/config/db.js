import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://sekar:S3kar@cluster0.irixl0g.mongodb.net/Food-Delivery').then(() => console.log("DB Connected"));
}