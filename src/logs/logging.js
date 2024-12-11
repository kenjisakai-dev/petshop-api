import winston from 'winston';

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});

const logger = winston.createLogger({
    level: 'silly',
    transports: [
        new winston.transports.File({ filename: './logs/petshop.log' }),
    ],
    format: combine(label({ label: 'petshop' }), timestamp(), myFormat),
});

export default logger;
