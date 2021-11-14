import {server, database} from './core';
import {Logger} from './utils/logger';

const start = async () => {
    server.listen(server.get('port'), () => Logger.info(`Server is listening at port ${server.get('port')}`));

    database
        .sync({force: true})
        .then(() => Logger.info('Connection to database has been initialized'))
        .catch((err) => console.error(`Connection to database has failed: ${err}`));
};

start().catch((error) => {
    throw error;
});
