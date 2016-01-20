var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


router.get('/', function(req, res, next) {
  Posts().select().then(function (posts) {
    res.json({'SUCCESS': posts });
  })
});

module.exports = router;
