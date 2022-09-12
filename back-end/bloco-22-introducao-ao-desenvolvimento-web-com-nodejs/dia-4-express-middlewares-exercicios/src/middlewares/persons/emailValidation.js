const emailValidation = async (req, res, next) => {
    const { email } = req.body;
    if (email.length < 12) {
        return next({
            status: 401,
            message: 'invalid email',
        });
    }
    next();
};

module.exports = emailValidation;