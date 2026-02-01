import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: '*', // Allow all origins for now to avoid issues
    allowedHeaders: ['Content-Type', 'x-auth-token']
}));
app.use(express.json({ limit: '50mb' })); // Body parser with increased limit for images
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes
// (Clerk handles authentication on the frontend)

// Database Connection
// Database Connection Strategy
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio', {
            serverSelectionTimeoutMS: 3000 // Fail fast (3s) if local DB is down
        });
        console.log('MongoDB Connected (Local)');
    } catch (err) {
        if (err.message.includes('ECONNREFUSED')) {
            console.log('Local MongoDB not found. Starting In-Memory Fallback...');
            try {
                const { MongoMemoryServer } = await import('mongodb-memory-server');
                const mongod = await MongoMemoryServer.create();
                const uri = mongod.getUri();
                await mongoose.connect(uri);
                console.log('--------------------------------------------------');
                console.log('FALLBACK STARTUP SUCCESSFUL');
                console.log('Connected to In-Memory MongoDB Instance');
                console.log('Note: Data will be lost when you restart the server');
                console.log('--------------------------------------------------');
            } catch (fallbackErr) {
                console.error('Fallback failed:', fallbackErr);
            }
        } else {
            console.error('MongoDB Connection Error:', err);
        }
    }
};

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
