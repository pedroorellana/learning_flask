const pg = require('pg');
const pool = new pg.Pool({
user: 'postgres',
host: '127.0.0.1',
database: 'postgres',
password: '123456',
port: '5432'});



 f1 = () => {
    return new Promise((resolve, reject) => {
        try {
            pool.query("DROP TABLE tmp;", (err, res) => {
                if (err) {
                    console.log(err)
                    //reject('error en la query:', err)
                    resolve("tmp ya existia")
                }
                resolve("DELETE OK")
                });         
        } catch(error) {
            console.log('Error catch:', error)
            //reject(error);
            resolve("tmp ya existia")
        }
 
    });
  }


  f2 = () => {
    return new Promise((resolve, reject) => {
        try {
            pool.query("CREATE TABLE tmp(EAN VARCHAR (255) NOT NULL, SKU VARCHAR (255) NOT NULL);", (err, res) => {
                if (err) {
                    console.log(err)
                    reject('error en la query:', err)                    
                }
                resolve("Create OK")
                });         
        } catch(error) {
            console.log('Error catch:', error)
            reject(error);
        } 
    });
  }


  f3 = () => {
    return new Promise((resolve, reject) => {   
        try {
            pool.query("COPY tmp(EAN,SKU) FROM 'C:/test2.txt' WITH DELIMITER '|'  CSV  ;", (err, res) => {
            //pool.query("COPY tmp(EAN,SKU) FROM 'C:/PRODUCTOS_IMAGENES.txt' DELIMITER '|' CSV HEADER  ;", (err, res) => {

                if (err) {
                    console.log(err)
                    reject('error en la query:', err)                    
                }
                resolve("CSV TO DB OK")
                });         
        } catch(error) {
            console.log('Error catch:', error)
            reject(error);
        } 
    });
  }

  

  main = async () => {
    try { 
    const v1 = await f1();
    console.log(v1);

    const v2 = await f2();
    console.log(v2);

    const v3 = await f3();
    console.log(v3);    

    pool.end();

    }
    catch(error){
        console.log('error main:', error)
    }
  }
  
  main(); 


