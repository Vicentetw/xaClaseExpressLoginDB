const express = require('express');
const userService = require('./user');
const userRouter = require('./user');

const router = express.Router();
// Rutas
router.use('/user', userRouter);

module.exports = {userRouter};