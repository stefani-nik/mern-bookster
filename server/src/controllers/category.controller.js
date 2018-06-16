import Category from '../models/category.model';
import Post from '../models/post.model'
import CategoryType from '../enums/categoryType'
import formidable from 'formidable';
import path from 'path';

export const createCategory = (req, res) => {
  
            const categoryData = {
                name : req.body.name,
                categoryType : req.body.categoryType,
            };

            new Category(categoryData)
            .save()
            .then(result => {
               res.json({message: 'success'});
            })
            .catch(err => {
                res.send(err)
            });
};

export const getCategoryPosts = (req, res) => {
        Category.
            findOne({_id : req.params.id})
            .then(result =>{
                Post.
                find({category : result._id})
                .then(posts =>
                    res.send(posts)
                )
                .catch(err=>
                    console.log(err)
                )
            }  
            )
            .catch(err =>
                console.log(err)
            );
}

export const getPostCategories = (req, res) => {
        Category.
            find({categoryType : req.params.categoryType})
            .then(result => 
                res.send(result)
            )
            .catch(err =>
                console.log(err)
            );
}

// export const getMagazineCategories = (req, res) => {
//     Category.
//         find({categoryType : req.params.categoryType})
//         .then(result => 
//             res.send(result)
//         )
//         .catch(err =>
//             console.log(err)
//         );
// }

// export const getArticleCategories = (req, res) => {
//     Category.
//         find({categoryType : req.params.categoryType})
//         .then(result => 
//             res.send(result)
//         )
//         .catch(err =>
//             console.log(err)
//         );
// }