import Post from '../models/post.model';
import User from '../models/user.model';
import * as PostService from '../services/postService'
import  PostType from '../enums/postType'
import {calculateNewRatirng} from '../utils/rating'
import formidable from 'formidable';
import path from 'path';

export const createPost = (req, res, next) => {
  
            const postData = {
                title : req.body.title,
                content : req.body.content,
                postType : req.body.postType,
                author: req.body.author,
                date : req.body.date,
                imageUrl: req.body.imageUrl,
                rating : req.body.rating,
                ratesCount : req.body.ratesCount
            };

            new Post(postData)
            .save()
            .then(result => {
               res.json({message: 'success'});
            })
            .catch(err => {
                res.send(err)
            });
};

export const deletePost = (req, res) => {
    Post
        .findOneAndRemove({_id: req.params.id})
        .then(deleted => {
            User.findOne({_id: deleted.author})
                .then(user => {
                    user.posts.pull(deleted._id);
                    user.save()
                        .then(() => {
                            res.send({message: 'success'})
                        })
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));

        })
        .catch(err => console.log(err));
};

// TODO: Add to user rated posts and dont update rate count if the user has rated it already
export const ratePost = async (req, res) => {
    let rate = req.body.rate;

    let post = await PostService.getById(req.params.id).exec();
    let result = calculateNewRatirng(Number(rate), post.rating, post.ratesCount);

    Post
        .findOneAndUpdate({_id : req.params.id}, {$set : {rating : result.newRate, ratesCount : result.ratesCount}})
        .then(result => {
            res.json({message: 'success'});
         })
         .catch(err => {
             res.send(err)
         });

}

export const getAllBooks = (req, res) => {
   PostService.getByType(PostType.Book.name)
        .then(result => res.send(result))
        .catch(err => console.log(err));
}

export const getAllMagazines = (req, res) => {
    PostService.getByType(PostType.Magazine.name)
         .then(result => res.send(result))
         .catch(err => console.log(err));
 }

 export const getAllArticles = (req, res) => {
    PostService.getByType(PostType.Article.name)
         .then(result => res.send(result))
         .catch(err => console.log(err));
 }

export const getBookById = (req, res) => {
    PostService.getById(req.params.id)
         .then(result => res.send(result))
         .catch(err => console.log(err));
}

export const getMagazineById = (req, res) => {
    PostService.getById(req.params.id)
         .then(result => res.send(result))
         .catch(err => console.log(err));
}

export const getArticleById = (req, res, id) => {
    PostService.getById(req.params.id)
         .then(result => res.send(result))
         .catch(err => console.log(err));
}

