const express = require('express');
const userRouter = require('./user');
const authRouter = require('./auth')
const router = express.Router();
// Rutas
router.use('/user', userRouter);

module.exports = {userRouter, authRouter };