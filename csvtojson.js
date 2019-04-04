
const csvFilePath='data.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    text = JSON.stringify(jsonObj);
    console.log(text);
    //console.log(jsonObj);
})
