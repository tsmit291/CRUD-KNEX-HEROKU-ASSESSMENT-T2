var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Comments(){
  return knex('comments');
};

function Posts(){
  return knex('posts');
};

router.get('/:post_id/comments', function(req, res, next){
    Comments().where('post_id', req.params.post_id).then(function(comments){
      res.json({'SUCCESS': comments});
  });
});

router.post('/:post_id/comments', function(req, res, next){
  Comments().insert(req.body).first().then(function(comments){
    res.redirect('/'+ req.params.post_id + '/comments/');
  });
});

router.get('/:post_id/comments/:id', function(req, res, next){
  Comments().where('id', req.params.id).first().then(function(comments){
    res.json({'SUCCESS': comments});
  });
});

router.get('/:post_id/comments/:id/edit', function(req, res, next){
  Comments().where('id', req.params.id).first().then(function(comments){
    res.json({'SUCCESS': comments});
  });
});





module.exports = router;
