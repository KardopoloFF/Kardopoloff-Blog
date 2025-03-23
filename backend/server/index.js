const express = require("express");
require("dotenv").config();

const { Sequelize } = require('sequelize');

// Создание экземпляра Sequelize с настройками из переменных окружения
const sequelize = new Sequelize(
  process.env.DB_NAME, // Имя базы данных
  process.env.DB_USER, // Имя пользователя
  process.env.DB_PASSWORD, // Пароль пользователя
  {
    host: process.env.DB_HOST, // Хост базы данных
    dialect: 'postgres', // Тип базы данных
    logging: false, // Отключаем логирование SQL-запросов (по желанию)
  }
);

// Проверка подключения к базе данных
async function checkDbConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}



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
