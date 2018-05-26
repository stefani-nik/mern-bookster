import Post from '../models/post.model';
import formidable from 'formidable';
import path from 'path';

export const sayHello = (req, res) => {
    res.send({message : "HELLOOO"});
}; 