const express = require("express");

const Contact = require("../models/contact");
const createPath = ("../helpers/create-path");

const router = express.Router();
const {
    getContact,
    redirectContact,
} = require("../controllers/contact-controller")

router.get('/contacts', getContact);

router.get('/about-us', redirectContact);

module.exports = router;