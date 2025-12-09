const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = {
  port,
  nodeEnv
};