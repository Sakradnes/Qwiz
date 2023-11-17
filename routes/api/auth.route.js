const router = require("express").Router();
const { User } = require("../../db/models");
const Registration = require("../../components/Registration");

router.get("/", (req, res) => {
  const html = res.renderComponent(Registration, {
    title: "Registration",
  });
  res.send(html);
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (name) {
      const newMember = await User.create({ name, score: 1 });
      res.app.locals.user = newMember;
      res.redirect("/category");
    // window.location.href='/Category'
    } else {
      res.status(400).send("заполните все поля");
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).end();
  }
});

module.exports = router;
