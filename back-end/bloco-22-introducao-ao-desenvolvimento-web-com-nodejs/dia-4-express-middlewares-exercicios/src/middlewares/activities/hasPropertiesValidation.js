const hasPropertiesValidation = async (req, res, next) => {
    const activitiesProperties = req.body;
    const requiredProperties = ['createdAt', 'difficulty', 'name', 'price', 'rating'];
    const hasProperties = requiredProperties.every((property) => property in activitiesProperties);
    if (!hasProperties) {
        return res.status(400).json({ message: 'attributes are missing! ' });
    }
    next();
};

module.exports = hasPropertiesValidation;