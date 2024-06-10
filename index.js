const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const StaticData = require('./Model/Db');
require("./Config/Db");
const getdata = require("./Routes/getdatarouter");
const { deleteData } = require('./Controller/restgetdatcontroller');


// Create an Express app
const app = express();
const port = 3000;
app.use(express.json());

app.use(getdata);
app.delete("/delete",deleteData);
// app.use(putData);


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
