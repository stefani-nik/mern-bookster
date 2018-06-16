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
        type : String,
        isRequired: true
    },
    author: {
        type : String,
        isRequired: true
    },
    date: {
        type: Date, 
        default: Date.now
    },
    imageUrl: {
        type: String,
        isRequired: true
    },
    rating: {
        type: Number,
        isRequired: true
    },
    ratesCount: {
        type: Number,
        isRequired : true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Category' 
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

export default mongoose.model('Post', post);