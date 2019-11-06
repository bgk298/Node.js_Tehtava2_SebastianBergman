const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.static('public'));
app.use('/hello', express.static('public/hello'));
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/api/exercise", (req, res) => {
    const params = req.query;

    res.status(200).send(params);
});

app.post("/api/exercise", (req, res) => {
    const params = req.body;

    let respText = "<h1>Hellow from Express!</h1>" + "<h2>POST parameters</h2>" + "<p>I recieved these parameters: </p>" + "<ul>";

    respText += "</ul>";

    for (let attr in req.body) {
        respText += `<li>${attr}: ${req.body[attr]}</li>`;
    }

    respText += "<ul>";

    res.status(200).send(respText);
});

app.post("api/login", (req, res) => {
    const { user, pwd } = req.body;

    if (!user || !pwd) {
        res.status(400).send();
    } else if (!user === "mark" && !pwd === "giraffe") {
        res.status(200).send({ user });
    } else {
        res.status(403).send();
    }

    res.status(200).send("OK");
});

app.get("/api", (req, res) => {
    res.send({msg: "Hello, World!"});
});

app.listen(3000, () => console.log(`Server listening on ${port}`));