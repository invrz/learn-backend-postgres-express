const { Pool } = require('pg');

const pool = new Pool({
    user: '<username>',
    host: 'localhost',
    database: 'mapp',
    password: '<password>',
    port: 5432,
  });

module.exports = pool