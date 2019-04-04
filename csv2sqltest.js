

var csv2sql = require('csv2sql');
csv2sql.transform("DOGS",fs.createReadStream('./data.csv'))
.on('data',function(sql){
	console.log(sql); //INSERT INTO DOGS ...
})
.on('end',function(rows){
	console.log(rows); // 5 - Num of rows handled, including header
})
.on('error', function(error){
	console.error(error); //Handle error
})