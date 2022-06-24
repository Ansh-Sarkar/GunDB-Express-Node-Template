const express = require('express')
const Gun = require('gun')
const dotenv = require('dotenv');

dotenv.config();

const app = express()
const port = process.env.PORT || process.env.GUN_CLUSTER_NODE_3_PORT
app.use(Gun.serve)

app.get('/', (req, res) => {
    res.send('Gun DB Node!')
})

const server = app.listen(port, () => {
    console.log("Listening at: http://localhost://" + port)
})

// define peers for discovery
Gun({web: server})