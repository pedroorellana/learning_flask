const pg = require('pg');
const pool = new pg.Pool({
user: 'postgres',
host: '127.0.0.1',
database: 'postgres',
password: '123456',
port: '5432'});

pool.query("INSERT INTO test1 (user_id, username) VALUES (124, 'macacos')", (err, res) => {
console.log(err, res);
pool.end();
});