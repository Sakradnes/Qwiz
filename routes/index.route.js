
const router = require("express").Router();
const categoryRouter = require("./category.route");

const authRouter = require("./api/auth.route");
const questionRouter = require("./questions.route"); 



router.use("/", authRouter);
router.use("/category", categoryRouter);
router.use("/questions", questionRouter);



module.exports = router;
