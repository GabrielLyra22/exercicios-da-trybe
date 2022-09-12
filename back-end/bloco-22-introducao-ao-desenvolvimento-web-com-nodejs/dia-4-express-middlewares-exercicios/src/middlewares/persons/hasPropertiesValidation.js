const hasPropertiesValidation = async (req, res, next) => {
    const activitiesProperties = req.body;
    const requiredProperties = ['email', 'firstName', 'password', 'phone'];
    const hasProperties = requiredProperties.every((property) => property in activitiesProperties);
    if (!hasProperties) {
        return next({ status: 401, message: 'attributes are missing! ' });
    }
    next();
};

module.exports = hasPropertiesValidation;