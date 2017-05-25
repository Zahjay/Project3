const db = require('../db/config');

const location = {};

location.findReviews = () => {
return db.query(
  `
 SELECT reviews.review, reviews.location, reviews.name, users.name, location.location
 FROM reviews 
 INNER JOIN location ON reviews.location = location.id
 INNER JOIN users ON reviews.name = users.id
 `
  );
};

location.findImage = () => {
  return db.query(
    `
    SELECT pictures.link, pictures.location, location.location
    FROM pictures
    INNER JOIN location ON pictures.location = location.id
    `
  );
};



module.exports = location
