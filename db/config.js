const options = {
  query: (e) => {
    console.log(e.query);
  }
};

const pgp = require('pg-promise')(options);

let db;

if(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV){
  db = pgp ({
    database: 'yilp_dev',
    port: 5432,
    host: 'localhost',
  });
};

module.exports = db;