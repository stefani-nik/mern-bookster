import Post from '../models/post.model'

export const getAll = () => Post.
find({});

export const getById = id  => Post
.findById({_id: id});

export const getByTitle = title => Post
.findOne({title : title});

export const getByType = type => Post
.find({postType : type});

export const getByCategory = name => Post
.find({category : name});