const databaseConfig = {
    host: process.env.DATABASE_HOST || 'localhost',
    port: Number(process.env.DATABASE_PORT) || 5432,
    database: process.env.DATABASE_NAME || '',
    username: process.env.DATABASE_USER || '',
    password: process.env.DATABASE_PASSWORD || '',
    dialect: 'postgres',
    dialectOptions: {
        connectTimeout: 2000
    },
    timezone: '+01:00'
};

export default databaseConfig;
