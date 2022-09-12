const phoneValidation = async (req, res, next) => {
    const { phone } = req.body;
    if (String(phone).length < 9) {
        return next({ status: 401, message: 'phone ausente!' });
    }
    next();
};

module.exports = phoneValidation;