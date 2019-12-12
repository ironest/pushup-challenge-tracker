const express = require("express");
const router = express.Router();
const PushupController = require('./../controllers/pushup_controller');

router.use((req, res, next) => {
    console.log("Global Router middleware");
    next();
})

router.get("/", (req, res) => res.send("Welcome"));

router.get("/pushups", (req, res, next) => {
    console.log("Specific Router middleware");
    next();
} ,PushupController.index);

router.post("/pushups", PushupController.create);

router.get("/pushups/:id", PushupController.show);

module.exports = router;

