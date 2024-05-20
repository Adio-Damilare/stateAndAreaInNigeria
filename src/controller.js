const { StateModel, AreaModel } = require("./state")

module.exports.CreateState = async (req, res) => {
    try {
        const found = await StateModel.findOne({ name: req.body.state.toLowerCase() })
        if (found) return res.status(200).json({ message: "state already created", status: false })
        await StateModel.create({ name: req.body.state.toLowerCase().trim() })
        res.status(200).json({ message: "success", status: true })
    } catch (ex) {
        console.log(ex.message)
        res.status(200).json({ message: "Error occur", status: false })
    }
}
module.exports.GetStates = async (req, res) => {
    try {
        const states = await StateModel.find(req.params)
        res.status(200).json({ message: "success", status: true,states })
    } catch (ex) {
        console.log(ex.message)
        res.status(200).json({ message: "Error occur", status: false })
    }
}
module.exports.CreateArea = async (req, res) => {
    try {
        const found = await AreaModel.findOne({ name: req.body.area.toLowerCase(),state: req.body.state.toLowerCase() })
        if (found) return res.status(200).json({ message: "area already created", status: false })
        await AreaModel.create({ name: req.body.area.toLowerCase().trim(),state: req.body.state.toLowerCase().trim(),stateId:"888" })
        res.status(200).json({ message: "success", status: true })
    } catch (ex) {
        console.log(ex.message)
        res.status(200).json({ message: "Error occur", status: false })
    }
}
module.exports.GetArea = async (req, res) => {
    try {
        const area = await AreaModel.findOne(req.params)
        res.status(200).json({ message: "success", status: true,area })
    } catch (ex) {
        console.log(ex.message)
        res.status(200).json({ message: "Error occur", status: false })
    }
}