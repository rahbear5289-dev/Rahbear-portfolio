import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: ""
    },
    otp: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String, // Base64 string
        default: ""
    },
    phoneNumber: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('User', userSchema);
