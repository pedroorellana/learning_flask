const pg = require('pg');
const pool = new pg.Pool({
user: 'postgres',
host: '127.0.0.1',
database: 'postgres',
password: '123456',
port: '5432'});

pool.query("SELECT * FROM test1", (err, res) => {
console.log(err, res);
pool.end();
});