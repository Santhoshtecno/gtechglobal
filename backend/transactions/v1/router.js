const express = require("express");
const { loadData, getTransactions } = require("./controller/userTransactions");
const { catchErrors } = require("../../helpers/errorHandler");
const router = express.Router();

router.post("/transactions", catchErrors(loadData));

router.get("/transactions", catchErrors(getTransactions));

module.exports = router;
