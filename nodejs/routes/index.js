const express = require('express');
const router = express.Router();

const userRouter = require("./userRouter");
router.use('/',userRouter);

const adminRouter = require("./adminRouter");
router.use('/admin',adminRouter);

module.exports = router;
