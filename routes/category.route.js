const router = require("express").Router();
// const CategoryBak = require('../components/CategoryBak');s
const CategoryPage = require("../components/CategoryPage");

const { Category } = require("../db/models");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();

    const html = res.renderComponent(CategoryPage, {
      title: "Quise-category",
      categories,
    });
    res.status(200).send(html);
  } catch (message) {
    res.status(500).send(message);
  }
});

module.exports = router;
