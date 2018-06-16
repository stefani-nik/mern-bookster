import CategoryType from '../enums/categoryType'
import mongoose from 'mongoose'

const category = mongoose.Schema({
    name: {
        type: String,
        isRequired: true
    },
    categoryType: {
        type: String,
        isRequired: true
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Post'
        }
    ]
});

export default mongoose.model("Category", category);