const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  const feedbackData = req.body;
  const dbQuery = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
                    VALUES ($1, $2, $3, $4);`;

  pool
    .query(dbQuery, [
      feedbackData.feeling,
      feedbackData.understanding,
      feedbackData.support,
      feedbackData.comments,
    ])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Error on post: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;
