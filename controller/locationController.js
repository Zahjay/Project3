const Location = require('../models/locationModel');

const locationController = {};

locationController.reviews = (req,res) => {
  Location.findReviews()
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

locationController.images = (req,res) => {
  Location.findImage()
    .then(image => {
      res.json({
        data: {image}
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400',err})
    })
}

// reviewController.create = (req,res) => {
//   Review.create({
//     review: req.body.review,
//     time: Date.now(),
//   })
//   .then(review => {
//     res.json({
//       data: {review}
//     });
//   })
//   .catch(err => {
//     res.status(400).json({message: '400',err});
//   });
// };

module.exports = locationController