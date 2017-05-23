const db = require('../db/config');

const review = {};

review.findAll = () => {
return db.query(
  `
 SELECT reviews.review, user.name
 FROM reviews 
 INNER JOIN users 
 ON reviews.user_id = users.id
 `
  );
};


module.exports = review
