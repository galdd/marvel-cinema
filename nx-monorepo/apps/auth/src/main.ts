// import logger from 'loglevel'
import server from './app/server';
// const isTest = process.env.NODE_ENV !== "test";
// const logLevel = process.env.LOG_LEVEL || (isTest ? "warn" : "info");

// logger.setLevel(logLevel)
import config from 'config';
const PORT = <number>config.get('AUTH_PORT') || 7001;

server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
