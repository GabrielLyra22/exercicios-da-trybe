const firstNameValidation = async (req, res, next) => {
    const { firstName } = req.body;
    if (firstName.length < 4) {
        return next({ status: 401, message: 'firstName ausente!' });
    }
    next();
};

module.exports = firstNameValidation;