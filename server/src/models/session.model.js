import mongoose from 'mongoose';

const session = mongoose.Schema({
    expiresAt: {
        type: Date, 
        default: Date.now, 
        expires: 7200
    },
    uId: {
        type: String, 
        isRequired: true
    },
    str: {
        type: String, 
        isRequired: true
    }
});

export default mongoose.model('Session', session);

