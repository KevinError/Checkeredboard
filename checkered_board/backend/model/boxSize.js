import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const boxSchema = new Schema({
    size: {
        type: Number,
        required: true
    }
});