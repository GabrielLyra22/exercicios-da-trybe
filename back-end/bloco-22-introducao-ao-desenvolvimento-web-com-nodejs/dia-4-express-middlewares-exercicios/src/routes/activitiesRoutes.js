const express = require('express');
const difficultyValidation = require('../middlewares/activities/difficultyValidation');
const nameValidation = require('../middlewares/activities/nameValidation');
const priceValidation = require('../middlewares/activities/priceValidation');
const ratingValidation = require('../middlewares/activities/ratingValidation');
const authValidation = require('../middlewares/persons/authValidation');
const { readContent, writeActivities } = require('../utils/readAndWrite');

const activitiesRoutes = express.Router();

activitiesRoutes.get('/', async (req, res) => {
    const data = await readContent();
    res.status(200).json(data.activities);
});

activitiesRoutes.use(authValidation, 
    nameValidation, priceValidation, ratingValidation, difficultyValidation);

activitiesRoutes.post('/', async (req, res) => {
    const { name, price, description: { rating, difficulty } } = req.body;
    const insertion = {
        name, 
        price, 
        description: { rating, difficulty, createdAt: new Date() },
    };
    res.status(201).json(insertion);
    await writeActivities(insertion);
});

module.exports = activitiesRoutes;