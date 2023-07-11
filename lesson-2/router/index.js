const Router = require('express').Router();
const useRouter = require('./user');
const costumerRouter = require('./customer');

router.use('/user', userRouter);
router.use('/customer', customerRouter);

module.exports = router;