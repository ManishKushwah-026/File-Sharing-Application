const express = require("express");
const cors = require("cors");
const router = require("./routes/routes.js");
const connectdb = require("./database/db.js");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 8000;

//call mongoBD
connectdb();

//activate server
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));