

const validateMiddleware = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validate({
                body: req.body,
                params: req.params,
                query: req.query
            });
            return next();

        } catch (err) {
            return res.status(500).send({
                data: null,
                success: false,
                message: `Error: ${err.name} - ${err.message}`
            })
        }
    }
};

export {
    validateMiddleware
};