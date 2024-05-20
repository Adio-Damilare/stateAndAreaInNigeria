const Router =require("express").Router()
const {CreateState, GetStates,CreateArea,GetArea}=require("./controller")

Router.route("/states").post(CreateState).get(GetStates)
Router.route("/areas").post(CreateArea).get(GetArea)
module.exports=Router