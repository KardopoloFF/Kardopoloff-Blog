const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";

dotenv.config({ path: path.resolve(__dirname, envFile) });

const app = express();
const PORT = process.env.PORT || 4444;

function start() {
  try {
    checkDbConnection();
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  } catch (error) {
    console.log(`Error has occurred by listnening port: ${PORT}`);
  }
}

start();
