const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { port } = require('./config');
const routes = require('./routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// API routes
app.use('/api', routes);

// Root health check
app.get('/', (req, res) => res.json({ status: 'ok', service: '1Quantum API' }));

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Internal Server Error' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`API listening on port ${port}`);
  });
}

module.exports = app;