const cors = require("cors")
const express = require("express");
const app = express();

app.use(cors())

const PORT = 2000

    app.get("/", (req,res)=>{
        const encodedAuth = (req.headers.authorization || '')
        .split(' ')[1] || ''
        const [name, password] = Buffer.from(encodedAuth, 'base64')
        .toString().split(':')

        console.log(`Name ${name}`);
        console.log(`Name ${password}`);
    
    res.set('www-Authenticate', 'Basic realm="Access to Index"')
    res.status(401).send("unauthorised access")
})

app.listen(PORT, (req, res)=>{
    console.log("Listening to the port 2000...")
})