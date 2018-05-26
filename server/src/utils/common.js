import {Types} from 'mongoose';

export const randomString = (bits) => {
    let text = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < bits; i++) {
      text+=chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return text;
};

export const objectIdValid = id => Types.ObjectId.isValid(id);