const express = require("express");

const router = express.Router();
//reemplazo route. router.
router.post("/", (req, res) => {

    const { name, email, password } = req.body;
    res.send({ name, email, password: "****" });

});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    res.send({ userId });
})

router.get("/", (req, res) => {
       const { name , email} = req.query;
    res.send({ name, email});
});

// cómo poner midware en una peticion route.put("/user/:userId", myMdw,(req, res) => {
router.put("/:userId", (req, res) => {
    const userId = req.params.userId;
    const { name, email, password } = req.body;
    res.send({ id: userId, name, email, password: "****" });
});

router.delete("/:userId", (req, res) => {
    const userId = req.params.userId;
    res.send(`Adios usuario ${userId}`);
});

module.exports = router;