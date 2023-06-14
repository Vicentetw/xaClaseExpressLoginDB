const router = express.Router();
//reemplazo route. router.
route.post("/user", (req, res) => {

    const { name, email, password } = req.body;
    res.send({ name, email, password: "****" });

});

route.get("/user/:userId", (req, res) => {
    const userId = req.params.userId;
    res.send({ userId });
})

route.get("/user", (req, res) => {
    const name = req.query.name;
    res.send({ name })
});

// cómo poner midware en una peticion route.put("/user/:userId", myMdw,(req, res) => {
route.put("/user/:userId", (req, res) => {
    const userId = req.params.userId;
    const { name, email, password } = req.body;
    res.send({ id: userId, name, email, password: "****" });
});

route.delete("/user/:userId", (req, res) => {
    const userId = req.params.userId;
    res.send(`Adios usuario ${userId}`);
});

module.exports = router;