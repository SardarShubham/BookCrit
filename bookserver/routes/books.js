const express = require('express');
const bodyParser = require('body-parser');

// const bookSchema = requre('../modals/book');

const bookRouter = express.Router();
bookRouter.use(bodyParser.json());

// bookRouter.route('/')
// .all((req, res, next) => {
//     console.log("inside get method");
//     res.end("getting all the books");
// });

bookRouter.all('/', function(req, res, next) {
    res.end("getting alltttt the bo here");
  });

module.exports = bookRouter;

