const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4444;

function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  } catch (error) {
    console.log(`Error has occurred by listnening port: ${PORT}`);
  }
}

start();
