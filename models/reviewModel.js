const db = require('../db/config');

const review = {};

review.findAll = () => {
return db.query(
  `
 SELECT reviews.review, reviews.location, reviews.name, users.name, location.location
 FROM reviews 
 INNER JOIN location ON reviews.location = location.id
 INNER JOIN users ON reviews.name = users.id
 `
  );
};

// review.create = (review) => {
//   return db.one(
//     `
//     INSERT INTO reviews(review)
//     VALUES($1)
//     RETURNING *
//     `,
//     [review.review])
//     .then(link => {
//       return db.one(
//         `
//         INSERT INTO users(name)
//         VALUES($1)
//         RETURNING *
//         `,
//         [review]
//       )
//     })
//   )
// }


module.exports = review
