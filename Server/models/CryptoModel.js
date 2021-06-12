const mongoose = require('mongoose');

const CryptoSchema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    symbol : {
        type : String,
        required: true
    },
    market_cap : {
        type: String,
        required : true
    },
    price : {
        type: String,
        required : true
    }
});


module.exports = Crypto = mongoose.model('crypto', CryptoSchema);