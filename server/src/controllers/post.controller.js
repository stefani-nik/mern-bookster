import Post from '../models/post.model';
import User from '../models/user.model';
import formidable from 'formidable';
import path from 'path';

export const createPost = (req, res, next) => {
    User
        .findOne({_id: req.user._id})
        .then(user => {
            return new Promise((resolve, reject) => {
                const form = new formidable.IncomingForm();
                form.uploadDir = 'uploads';
                form.keepExtensions = true;
                form.parse(req, (err, fields, files) => {
                    resolve({files, fields, user})
                });
            });
        })
        .then(({files, fields, user}) => {
            const postData = {
                author: user,
                imagePath: path.join(__dirname, `../../${files.image.path}`),
                imageContentType: files.image.type,
                content: fields.content
            };

            new Post(postData)
                .save()
                .then(post => {
                    user
                        .posts
                        .push(post);
                    user
                        .save()
                        .then(() => res.json({message: 'Successful'}))
                        .catch(console.log);
                })
                .catch(console.log);
        })
        .catch(console.log)
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
