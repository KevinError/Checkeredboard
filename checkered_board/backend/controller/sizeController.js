import mongoose from 'mongoose';
import {boxSchema} from '../model/boxSize';

const Box = mongoose.model('Box', boxSchema);
const size = 8;

export const displaySize = (req, res) => {
    Box.findOneAndUpdate({ _id: req.params.BoxID}, size, {new: true}, (err, Box) => {
        if (err) {
           res.send(err);
        }
        res.json(Box);
    });
    Box.find({}, (err, Box) => {
        if (err) {
            res.send(err);
        }
        res.json(Box);
    });
};

export const changeSize = (req, res) => {
    Box.findOneAndUpdate({ _id: req.params.BoxID}, req.body, {new: true}, (err, Box) => {
        if (err) {
           res.send(err);
        }
        res.json(Box);
    });
};