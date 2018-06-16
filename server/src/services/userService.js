import User from '../models/user.model';

export const getById = id  => User
    .findById({_id: id});

export const getByUsername = username  => User
    .findOne({username: username});