const express = require('express');
const router = express.Router();
const { submitForm, getFormData } = require('../controllers/formcontroller');

router.post('/submit-form', submitForm);
router.get('/form-data', getFormData);

module.exports = router;
