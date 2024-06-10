const mongoose = require ('mongoose');

const DataSchema = new mongoose.Schema({

    title:{
        type:String
    },
    subtitle:{
        type:String
    },
    MRP:{
        type:Number
    },
    SellingPrice:{
        type:Number
        
    }
    



})


const StaticData = mongoose.model("StaticData",DataSchema);
module.exports = StaticData;