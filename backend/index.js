const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

const ecom = require("./routes/authRoutes")
//mount
app.use("api/v1", ecom);

const connectWithDb = require("./config/database");
connectWithDb();

//start server
app.listen(PORT, () => {
   console.log(`App running successfully at ${PORT}`);
})

app.get("/", (req, res) => {
   res.send(`<h1>This is homepage</h1>`);
})