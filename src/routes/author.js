const express = require('express');
const AuthorController = require('../controller/AuthorController');
const ArticleController = require('../controller/ArticleController')
const route = express.Router();
route
    .post('/', AuthorController.create)
    .post('/like/:id', ArticleController.likeArticle)
module.exports = route;