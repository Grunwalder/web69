const router = require('express').Router();
const createUser = require('../controllers/user');


router.get('/', (req, res) => {
    return res.status(200).json({
        message: 'success'
    })
})

router.post('/', (req, res) => {

})

router.put('/', (req, res) => {

});

module.exports = router