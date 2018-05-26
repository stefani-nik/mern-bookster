import User from '../models/user.model';

export const getById = id  => User
    .findById({_id: id});