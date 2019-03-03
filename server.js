const express = require('express');
const getIP = require('ipware')().get_ip;
const iplocation = require("iplocation").default;


const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Running on port: ' + PORT);
});

app.get('/', (req, res) => {
    const re = /(:\w*){1,2}:([\d.]+)/;    // /(:(f*)){1,2}:([0-9.]+)/g
    const match = req.ip.match(re);

    iplocation("81.108.1.153")
    .then(response => {
        console.log(response);
    })
    .catch(err => console.log(err));

    res.status(200).send('Welcome to my server!');
});