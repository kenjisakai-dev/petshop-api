import express from 'express';
import cors from 'cors';
import winston from 'winston';
import ownerRouter from './router/owner.route.js';
import animalRouter from './router/animal.route.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/owners', ownerRouter);
app.use('/animals', animalRouter);

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.loggerOwner = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: 'log/owner.info.log',
      level: 'info',
    }),
  ],
  format: combine(
    label({ label: 'petshop-api' }),
    winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm' }),
    myFormat
  ),
});
global.loggerAnimal = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: 'log/animal.info.log',
      level: 'info',
    }),
  ],
  format: combine(
    label({ label: 'petshop-api' }),
    winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm' }),
    myFormat
  ),
});
global.loggerError = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: 'log/error.log',
      level: 'info',
    }),
  ],
  format: combine(
    label({ label: 'petshop-api' }),
    winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm' }),
    myFormat
  ),
});

app.use((err, req, res, next) => {
  loggerError.error(`${req.method} - ${err.message}`);
  res.status(400).send({ erro: err.message });
});

app.listen(3000, () => console.log('API Started!'));
