import {changeSize} from '../controller/sizeController';

const route = (app) => {
    app.route('/')
    // get endpoint
    .get()
    // POST endpoint
    .post(changeSize);
}