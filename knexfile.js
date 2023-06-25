// para criar novas tabelas: ./node_modules/.bin/knex migrate:make --env clinic [nome_da_tabela]

require("dotenv").config();
module.exports = {
  production: {
    client: "pg",
    debug: true,
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
  },
  develop: {
    client: process.env.KNEX_PUBLIC_DATABASE_CLIENT,
    connection: {
      port: process.env.KNEX_PUBLIC_DATABASE_PORT,
      host: process.env.KNEX_PUBLIC_DATABASE_HOST,
      database: process.env.KNEX_PUBLIC_DATABASE_NAME,
      user: process.env.KNEX_PUBLIC_DATABASE_USER,
      password: process.env.KNEX_PUBLIC_DATABASE_PASSWD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "src/migrations",
    },
    seeds: {
      directory: "src/seeds",
    },
  },
};
