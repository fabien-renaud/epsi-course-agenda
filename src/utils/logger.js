import winston, {silly} from 'winston';
import morgan from 'morgan';
import split from 'split';
import {name} from '../../package.json';

const formattedMessage = (info) => `${info.timestamp} ${info.level} ${info.label} ${info.message}`;
const formattedColoredMessage = (info) => winston.format.colorize().colorize(info.level, formattedMessage(info));

const Logger = winston.createLogger({
    /*
     * Logging levels are detailled here: https://github.com/winstonjs/winston#logging-levels
     *   error: 0,
     *   warn: 1,
     *   info: 2,
     *   http: 3,
     *   verbose: 4,
     *   debug: 5,
     *   silly: 6
     */
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        winston.format.label({label: name}),
    ),
    transports: [
        // Every logs are displayed in console
        new winston.transports.Console({
            level: 'silly',
            format: winston.format.printf(formattedColoredMessage)
        }),
        // Only info logs and below are displayed in var/log/full.log
        new winston.transports.File({
            dirname: 'var/log',
            filename: 'full.log',
            level: 'http',
            format: winston.format.printf(formattedMessage)
        }),
        // Only error logs and below are displayed in var/log/error.log
        new winston.transports.File({
            dirname: 'var/log',
            filename: 'error.log',
            level: 'error',
            format: winston.format.printf(formattedMessage)
        })
    ]
});

const httpRequestLoggerMiddleware = morgan(':method :url', {
    immediate: true,
    stream: split().on('data', (message) => Logger.http(message))
});

const httpResponseLoggerMiddleware = morgan(':status :response-time ms', {
    immediate: false,
    stream: split().on('data', (message) => Logger.debug(message))
});

export {Logger, httpRequestLoggerMiddleware, httpResponseLoggerMiddleware};
