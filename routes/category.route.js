const router = require("express").Router();
const CategoryPage = require("../components/CategoryPage");

const { Category } = require("../db/models");
const { User } = require("../db/models");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    const BigScore = await User.findAll({
      order: [["score", "DESC"]],
    });

    const html = res.renderComponent(CategoryPage, {
      title: "Quise-category",
      categories,
      BigScore
    });
    res.status(200).send(html);
  } catch (message) {
    res.status(500).send(message);
  }
});

module.exports = router;
