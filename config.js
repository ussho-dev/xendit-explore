const Xendit = require('xendit-node');
require("dotenv").config();

const x = new Xendit({
  secretKey: process.env.XEN_SECRET_KEY,
});

module.exports = x;