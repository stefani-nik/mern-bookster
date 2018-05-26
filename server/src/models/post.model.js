import PostType from '../enums/postType'
import mongoose from 'mongoose';

const post = mongoose.Schema({
    title: {
        type: String,
        isRequired: true,
        validate : {
            validator:(value) => (value.length > 4),
            message: 'Title must be at least 5 characters long.'
        }
    },
    content: {
        type: String,
        isRequired: true,
        validate : {
            validator:(value) => (value.length > 19),
            message: 'Content must be at least 20 characters long.'
        }
    },
    postType: {
        type : PostType,
        isRequired: true
    },
    author: {
        type: String,
        isRequired: true
    },
    date: {
        type: Date, 
        default: Date.now
    },
    imagePath: {
        type: String ,
        isRequired: true
    },
    imageContentType: {
        type: String , 
        isRequired: true
    },
    rating: {
        type: Number
    },
    ratesCount: {
        type: Number
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

export default mongoose.model('Post', post);