const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

const createVA = require("./controllers/createVA");
const getVA = require("./controllers/getVA");
const callbackPayment = require("./controllers/callbackPayment");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post("/create_va", createVA);
app.get("/get_va/:id", getVA);
app.post("/callback_payment", callbackPayment);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
