

const pg = require('pg');
const pool = new pg.Pool({
user: 'postgres',
host: '127.0.0.1',
database: 'postgres',
password: '123456',
port: '5432'});

f1 = () => {
    return Promise(resolve, reject); {
        try {
            pool.query("DROP TABLE tmp;", (err, res) => {
            console.log(err, res);
            pool.end();
            });
        }
        catch(error){
            console.error(error);
        }
    }
}





pool.query("CREATE TABLE tmp(col1 VARCHAR (255) NOT NULL, col2 VARCHAR (255) NOT NULL);", (err, res) => {
console.log(err, res);
pool.end();
});


pool.query("INSERT INTO tmp (col1, col2) VALUES ('aasdasd3', 'macacos3')", (err, res) => {
console.log(err, res);
pool.end();
});


pool.query("SELECT * FROM tmp", (err, res) => {
console.log(err, res);
pool.end();
});

