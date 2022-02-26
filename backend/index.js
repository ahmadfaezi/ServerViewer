// Import Section
const xlsx = require("xlsx");
const http = require("http");
const express = require("express");
const cors = require("cors");

// Enum/Config Section
const config = {
   PORT_NUMBER: '3000',
   DB_PATH: './database/database.xlsx',
   SHEET_NAME: 'Sheet1',
   SERVER_URL: 'http://localhost:3000'
}

// BackEnd Services Section
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Router & Logic Section
//// GET Data from Excel
app.get('/', (req, res) => {
    var workBook = xlsx.readFile(config.DB_PATH);
    var sheetData = workBook.Sheets[config.SHEET_NAME];
    var jsonData = xlsx.utils.sheet_to_json(sheetData);
    res.json(jsonData);
});

//// WRITE Data from Excel

//// UPDATE Data from Excel

//// DELETE Data from Excel

// Server Section
app.listen(config.PORT_NUMBER, function() {
    console.log('Server is up and running.');
});





