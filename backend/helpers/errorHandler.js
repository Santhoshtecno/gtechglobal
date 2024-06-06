module.exports.catchErrors = (fn) => {
    return function (req, res, next) {
        return fn(req, res, next).catch((error) => {
            if (error.name === 'ValidationError' && error.errors) {
                const errors = {};
                Object.keys(error.errors).forEach((key) => {
                    errors[key] = error.errors[key].message;
                });
                return res.status(400).json({ message: 'Validation Error', errors });
            } else {
                const statusCode = error.statusCode || 500;
                const errorMessage = error.message || 'Internal Server Error';
                return res.status(statusCode).json({ message: errorMessage });
            }
        });
    };
};
