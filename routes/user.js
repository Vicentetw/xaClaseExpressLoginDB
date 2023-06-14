const express = require("express");

const router = express.Router();
//reemplazo route. router.
router.post("/user", (req, res) => {

    const { name, email, password } = req.body;
    res.send({ name, email, password: "****" });

});

router.get("/user/:userId", (req, res) => {
    const userId = req.params.userId;
    res.send({ userId });
})

router.get("/user", (req, res) => {
    const name = req.query.name;
    res.send({ name })
});

// cómo poner midware en una peticion route.put("/user/:userId", myMdw,(req, res) => {
router.put("/user/:userId", (req, res) => {
    const userId = req.params.userId;
    const { name, email, password } = req.body;
    res.send({ id: userId, name, email, password: "****" });
});

router.delete("/user/:userId", (req, res) => {
    const userId = req.params.userId;
    res.send(`Adios usuario ${userId}`);
});

module.exports = router;