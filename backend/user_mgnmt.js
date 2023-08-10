const fs = require("fs");

const csvParser = require('csv-parser');
const filepath = './uploads/data.csv'


// fs.readFile("./uploads/data.csv", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

const result = []

reader = fs.createReadStream(filepath)
    .on('error', () => {
        // handle error
    })

    .pipe(csvParser())
    .on('data', (data) => {
        // use row data
        result.push(data)
    })

    .on('end', () => {
        // handle end of CSV
        console.log(result)
    });
