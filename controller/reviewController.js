const Review = require('../models/reviewModel');

const reviewController = {};

reviewController.index = (req,res) => {
  Review.findAll()
    .then(review => {
      res.json({
        data: {review}
      });
    })
      .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err})
    });
};

reviewController.create = (req,res) => {
  Review.create({
    review: req.body.review,
    time: Date.now(),
  })
  .then(review => {
    res.json({
      data: {review}
    });
  })
  .catch(err => {
    res.status(400).json({message: '400',err});
  });
};

module.exports = reviewController