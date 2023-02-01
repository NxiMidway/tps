const express = require("express");
const router = express.Router();
const { findUser } = require("../controllers/users");

router.get("/find", findUser);
module.exports = router;
