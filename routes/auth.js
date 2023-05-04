const express = require("express");
const router = express.Router();
const {validatorLogin,validatorRegister} = require("../validator/auth");
const { matchedData } = require("express-validator");

//crear item
router.post("/register", validatorRegister, (req, res, next) => {
    req = matchedData(req);
    res.send({data: req})
});


module.exports = router;
