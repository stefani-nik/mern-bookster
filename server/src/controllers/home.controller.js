import Post from '../models/post.model';
import * as HomeService from '../services/homeService'
import formidable from 'formidable';
import path from 'path';

export const index = async (req, res) => {
    const collections =  {
        trending : [],
        popular : await HomeService.getPopular().exec(),
        newPosts : await HomeService.getNew().exec()
    };

    res.send(collections);
}; 