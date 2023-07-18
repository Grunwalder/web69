const createUser = (req, res) => {
    return res.status(200).json({
        message: 'User created',

    })
}

module.exports = { createUser }