import Post from '../models/post.model';
import User from '../models/user.model';
import Comment from '../models/comment.model';

export const createComment = (req, res) => {
    const commentInfo = {
        author: req.body.author,
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