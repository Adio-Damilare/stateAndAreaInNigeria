const express =require("express")
const Http=require("http")
const cors=require("cors")
const dotenv=require('dotenv')
const mongoose=require("mongoose")
const Router=require("./Route")
const Server=express()
dotenv.config()

Server.use(express.json({limit: '5000mb'}));
Server.use(express.urlencoded({extended: true, limit: '5000mb'}));
Server.use(cors({
    credentials: true,
    methods: ['POST', 'GET', 'DELETE', 'PATCH', 'PUT'],
    origin:"*",
    optionsSuccessStatus: 200
}))
Server.get('/', (req, res, next) => {
    try {
        res.status(200).json({
            message: 'List of states ',
            status: true
        });
    } catch (ex) {
        next(ex);
    }
});
Server.use('/api',Router)

mongoose.connect(process.env.MONGODBURL,({})).then(()=>{
    console.log("mongodb connect successfully")
}).catch((err)=>{
    console.log("Error occur while connecting to mongodb")
})

Http.createServer(Server).listen(4000,()=>{
    console.log("application is listening")
})

