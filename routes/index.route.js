
const router = require("express").Router();
const categoryRouter = require("./category.route");

const authRouter = require("./api/auth.route");


// const productsRouter = require("./products.route");
// const usersRouter = require("./user.route");
// const ordersRouter = require("./order.route");
const questionRouter = require("./questions.route"); 



router.use("/", authRouter);
router.use("/category", categoryRouter);
router.use("/questions", questionRouter);


// router.use("/products", productsRouter);

// router.use("/users", usersRouter);
// router.use("/orders", ordersRouter);

module.exports = router;
