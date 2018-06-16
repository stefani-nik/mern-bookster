import mongoose from 'mongoose';
import { generateHashedPassword } from '../utils/encryption';

const user = mongoose.Schema({
    username: {
        type: String, 
        unique: true, 
        validate: {
            validator: (value) => (value.length > 4),
            message: 'Username must be at least 5 characters long.'
        }
    },
    email: {
        type: String, 
        unique: true,
        // validate: {
        //     // get email validation
        // }
    },
    salt: {
        type: String, 
        required: true 
    },
    password: {
        type: String, 
        required: true, 
        validate: {
            validator:(value) => (value.length > 4),
            message: 'Password must be at least 5 characters long.'
        }
    },
    readPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    currentlyReadingPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    wantToReadPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    ratedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Comment'
        }
    ],
    avatar: {
        type: String, default: '//some default picture'
    }
});

user.methods.authenticate = function(password) {
    return generateHashedPassword(password, this.salt) === this.password;
};

export default mongoose.model('User', user);