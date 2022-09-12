const difficultyValidation = async (req, res, next) => {
    const { description: { difficulty } } = req.body;
    if (difficulty === 'Fácil' || difficulty === 'Médio' || difficulty === 'Difícil') {
        return next();
    } 
        return res.status(400).json(
            { message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' },
);   
};

module.exports = difficultyValidation;