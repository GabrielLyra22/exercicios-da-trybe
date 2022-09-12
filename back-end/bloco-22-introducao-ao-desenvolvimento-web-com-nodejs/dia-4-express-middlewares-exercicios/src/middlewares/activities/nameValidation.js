const nameValidation = (req, res, next) => {
    const { name } = req.body;
    if (name.length < 5) {
        return res.status(400).json({ message: 'O campo name é obrigatório' });
    }
    next();
};

module.exports = nameValidation;