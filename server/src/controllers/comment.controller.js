import Post from '../models/post.model';
import User from '../models/user.model';
import Comment from '../models/comment.model';
import * as UserService from '../services/userService'

export const createComment = async (req, res) => {

    const commentInfo = {
        author:  await UserService.getByUsername(req.body.author).exec(),
        content: req.body.content
    };

    new Comment(commentInfo)
        .save()
        .then((comment) => {
            const postId = req.params.id;

            Post
                .findOne({_id: postId})
                .then(post => {
                    post.comments.push(comment);
                    post
                        .save()
                        .then(result => {
                            res.send({'message': 'success'})
                        })
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
};

export const deleteComment = async (req, res) => {

};