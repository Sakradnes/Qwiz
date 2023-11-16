const express = require("express");
const router = express.Router();
const AllQuestions = require("../components/AllQuestions");

const { Question, Category } = require("../db/models");

router.get("/:idcategory", async (req, res) => {
  try {
    const { idcategory } = req.params;
    const questions = await Question.findAll({
      limit:1 ,where: { category_id: idcategory },
    });
    // console.log(questions);
    const html = res.renderComponent(AllQuestions, {
      title: "Questions",
      questions,
    });
    res.send(html);
  } catch ({ message }) {
    res.status(500).send(message);
  }
});

router.get("/:idcategory/:idQuestion", async (req, res) => {
    try {
      const { idcategory } = req.params;
      const {  idQuestion } = req.params;
      console.log(idcategory, idQuestion);
      const questions = await Question.findAll({
        where: { category_id: idcategory },
      });
       if(questions[Number(idQuestion)+1]){
         const html = res.renderComponent(AllQuestions, {
           title: "Questions",
           questions:[questions[Number(idQuestion)+1]]
   
         }, { doctype: false });
   res.json({html});
       }else{
        window.location.href="/category";
       }
    } catch ({ message }) {
      res.status(500).send(message);
    }
  });

module.exports = router;
