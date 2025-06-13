import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
export const connectDB = async () => {
    try {
        
        const connection = await mongoose.connect(process.env.MONG_URI);
        console.log('MongoDB connected:', connection.connection.host);
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
    };