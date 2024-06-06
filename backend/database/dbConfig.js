const mongoose = require('mongoose');

exports.connect = () => {
    mongoose.connect(process.env.DB_URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    });
    mongoose.connection.on('connected', () => {
        console.log(`--- 🔥 Connected to ${process.env.NODE_ENV || 'Development'} Database 🔥 ---`);
    });
    mongoose.connection.on('error', (err) => {
        console.error(`--- 😨 Error Occured While Connecting to ${process.env.NODE_ENV || 'Development'} Database 😨 ---`);
    });
    mongoose.connection.on('disconnect', () => {
        console.log(`--- ☠️ 'Disconnected From ${process.env.NODE_ENV || 'Development'} Database ☠️---`)
    });

}