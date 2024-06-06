const Transaction = require('../../../models/Transaction')
const TransactionsData = require('../../../data/transactions.json');
const { Created, Success } = require('../../../helpers/response/Success');
const { formatDate } = require('../../../helpers/response/formatDate');

module.exports.getTransactions = async (req, res) => {
    const { startDate, endDate } = req.query;
    const transactions = await Transaction.find({
        date: { $gte: new Date(startDate), $lte: new Date(endDate) },
        status: { $in: ["COMPLETED", "IN PROGRESS", "REJECTED"] }
    }).sort({ date: 1 });
    const formattedTransactions = transactions.map(transaction => ({ 
        ID: transaction.id,
        Date: formatDate(transaction.date),
        Comments: transaction.Comments,
        Action: 'View'
    }));

    return Success(res, "data", formattedTransactions)
}

module.exports.loadData = async (req, res) => {
    let data = await Transaction.insertMany(TransactionsData);
    return Created(res, "data uploaded", data)
}