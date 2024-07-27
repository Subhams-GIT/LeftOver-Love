const express = require('express');
const router = express.Router();
const { submitReceiver } = require('../controllers/recceivercontroller');

router.post('/receiver', submitReceiver);

module.exports = router;
