const express = require('express');
const emailValidation = require('../middlewares/persons/emailValidation');
const firstNameValidation = require('../middlewares/persons/firstNameValidation');
const hasPropertiesValidation = require('../middlewares/persons/hasPropertiesValidation');
const passwordValidation = require('../middlewares/persons/passwordValidation');
const phoneValidation = require('../middlewares/persons/phoneValidation');
const { writePersons } = require('../utils/readAndWrite');
const generateToken = require('../utils/generateToken');

const personsRoutes = express.Router();

personsRoutes.get('/', (_req, res) => {
    res.status(200).json({
        email: 'jgabriellyra@hotmail.com',
        password: '12345679',
        firstName: 'João',
        phone: 998711311,
    });
});

personsRoutes.use(hasPropertiesValidation, emailValidation, firstNameValidation, 
    passwordValidation, phoneValidation);

personsRoutes.post('/', async (req, res) => {
    const { email, password, firstName, phone } = req.body;
    const insertion = {
        email, password, firstName, phone,
    };
    
    const token = generateToken();

    await writePersons(insertion);
    res.status(201).json(token);
});

module.exports = personsRoutes;