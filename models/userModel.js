const db = require('../db/config');

const User = {};

User.findByUserName = userName => {
  return db.oneOrNone(`SELECT * FROM users WHERE username = $1`,[username]);
};

User.create = user => {
  return db.one(
    `
    INSERT INTO users 
    (username, name, email, password)
    VALUES ($1, $2, $3, $4) RETURNING *
    `,
    [user.username, user.name, user.email, user.password]
  );
};

module.exports = User;