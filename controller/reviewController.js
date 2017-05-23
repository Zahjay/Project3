const Review = require('../models/reviewModel');

const reviewController = {};

reviewController.index = (req,res) => {
  Review.findAll()
    .then(review => {
      res.json({
        message: 'ok',
        data: {review}
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({message: '400', err})
      })
    })
}

module.exports = reviewController