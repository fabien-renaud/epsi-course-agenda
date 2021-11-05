import {server, database} from './core';

const start = async () => {
    server.listen(server.get('port'), () => console.info(`Server is listening at port ${server.get('port')}`));

    database
        .sync()
        .then(() => console.info('info', 'Connection to database has been initialized'))
        .catch((err) => console.error('error', `Connection to database has failed: ${err}`));
};

start().catch((error) => {
    throw error;
});
