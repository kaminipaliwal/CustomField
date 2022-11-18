var router = require('express').Router();

const customFieldController = require("../components/customFieldController");

router.post('/custom_field',customFieldController.customFieldM);


module.exports = router;