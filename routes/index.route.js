const router = require("express").Router();
const categoryRouter = require("./category.route");
// const authRouter = require("./auth.route");
// const productsRouter = require("./products.route");
// const usersRouter = require("./user.route");
// const ordersRouter = require("./order.route");

router.use("/", categoryRouter);
// router.use("/auth", authRouter);
// router.use("/products", productsRouter);
// router.use("/users", usersRouter);
// router.use("/orders", ordersRouter);

module.exports = router;
