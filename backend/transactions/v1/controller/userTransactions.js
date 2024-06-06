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

module.exports.getTransactionsByID = async (req, res) => {
    let  data = await Transaction.findOne({id:req.params.id})
    let formattedTransactions = {
        id: data.id,
        date: formatDate(data.date),
        comments: data.Comments,
    }
    return Success(res, "data", formattedTransactions)
}
module.exports.updateTransactions = async (req, res) => {
   
    let data = await Transaction.findOneAndUpdate(
        { id: req.params.id },
        { $set: { Comments: req.body.comments } },
        { returnDocument: 'after' }
    );
    return Success(res, "data", data)
}

module.exports.loadData = async (req, res) => {
    let data = await Transaction.insertMany(TransactionsData);
    return Created(res, "data uploaded", data)
}