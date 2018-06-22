import Post from '../models/post.model'
import { callbackify } from 'util';


export const getPopular = () => {
    return Post
    .find({})
    .sort({rating: -1})
    .limit(4)
    .select({title : 1, author: 1, imageUrl : 1, rating : 1})
};

export const getNew = () => {
    return Post
    .find({})
    .sort({date: -1})
    .limit(4)
    .select({title : 1, author: 1, imageUrl : 1, date : 1})
};
                       
                                