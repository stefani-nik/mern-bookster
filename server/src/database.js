import mongoose from 'mongoose';
const connection = 'mongodb://localhost/bookster';

mongoose.Promise = global.Promise;

export const db = (() => {
    mongoose.connect(connection)
        .then(() => {
            console.log('Mongoose is up and ready!')
        })
        .catch(console.log);
})();