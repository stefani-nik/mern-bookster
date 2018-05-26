import mongoose from 'mongoose';

const invalidToken = mongoose.Schema({
    expiresAt: {
        type: Date, 
        default: Date.now, 
        expires: 3600
    },
    value: {
        type: String, 
        isRequired: true
    }
});

export default mongoose.model('InvalidToken', invalidToken);
