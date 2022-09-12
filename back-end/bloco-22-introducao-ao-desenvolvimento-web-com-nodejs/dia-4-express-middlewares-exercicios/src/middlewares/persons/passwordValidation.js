const passwordValidation = async (req, res, next) => {
    const { password } = req.body;
    if (password.length < 8) {
        return next({ status: 401, message: 'password ausente!' });
    }
    next();
};

module.exports = passwordValidation;