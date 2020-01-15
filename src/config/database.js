require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_USER,
  database: process.env.DB_PASS,
  define: {
    timestaps: true,
    underscored: true,
    underscoredAll: true,
  },
};
