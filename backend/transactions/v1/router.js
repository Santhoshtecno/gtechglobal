const express = require("express");
const { loadData, getTransactions, updateTransactions, getTransactionsByID } = require("./controller/userTransactions");
const { catchErrors } = require("../../helpers/errorHandler");
const router = express.Router();

router.post("/transactions", catchErrors(loadData));

router.put("/transactions/:id", catchErrors(updateTransactions));

router.get("/transactions", catchErrors(getTransactions));

router.get("/transactions/:id", catchErrors(getTransactionsByID));

module.exports = router;
