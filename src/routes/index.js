const express = require('express');
const userRouter = require('./user');
const libraryRouter = require('./library');
const bookRouter = require('./book');
const authRouter = require('./auth');

const router = express.Router();

router.use('/user', userRouter);
router.use('/library', libraryRouter);
router.use('/book', bookRouter);

module.exports = {
  userRouter,
  libraryRouter,
  bookRouter,
  authRouter,
  //router
};
