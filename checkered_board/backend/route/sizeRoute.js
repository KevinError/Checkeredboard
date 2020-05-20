import {changeSize} from '../controller/sizeController';

const route = (app) => {
    app.route('/')
    // get endpoint
    .get(displaySize)
    // POST endpoint
    .post(changeSize);
}