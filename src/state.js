const mongoose = require("mongoose");

const StateSchema=mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    country: {
        required: true,
        type: String,
        default:"nigeria"
    }
})
const AreaSchema=mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    state:{
        required: true,
        type: String
    },
    stateId:{
        required: true,
        type: String
    }
})
const StateModel=mongoose.model("state",StateSchema);
const AreaModel=mongoose.model("area",AreaSchema);
module.exports={StateModel,AreaModel}