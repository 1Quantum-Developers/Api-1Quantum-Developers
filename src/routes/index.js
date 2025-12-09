const express = require('express');
const healthRouter = require('./health');

const router = express.Router();

router.use('/health', healthRouter);

// Add other routers here, e.g. router.use('/users', usersRouter)

module.exports = router;