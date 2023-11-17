const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const AllQuestions = require("../components/AllQuestions");
const QuestionForm = require("../components/Question");
const AnswerForm = require("../components/Answer");

const { Question } = require("../db/models");
const { User } = require("../db/models");


//получить первый вопрос

router.get("/:idcategory", async (req, res) => {
  try {
    const { idcategory } = req.params;
    console.log(req.params);
    const questions = await Question.findAll({
      where: { category_id: idcategory },
      order: [["id", "ASC"]],
    });
    const html = res.renderComponent(AllQuestions, {
      title: "Questions",
      questions,
    });
    res.send(html);
  } catch ({ message }) {
    console.log(message);
    res.status(500).send(message);
  }
});

//получить следующий вопрос

router.get("/:idcategory/:idQuestion", async (req, res) => {
  try {
    const { idcategory } = req.params;
    const { idQuestion } = req.params;
    console.log(idcategory, idQuestion);
    const questions = await Question.findOne({
      where: {
        [Op.and]: [
          { category_id: idcategory },
          { id: { [Op.gt]: Number(idQuestion) } },
        ],
      },
    });
    console.log(questions);
    if (questions) {
      const html1 = res.renderComponent(
        QuestionForm,
        {
          question: questions,
        },
        { doctype: false }
      );
      const html2 = res.renderComponent(
        AnswerForm,
        {
          question: questions,
        },
        { doctype: false }
      );
      res.json({ html1, html2 });
    } else {
      res.json({});
    }
  } catch ({ message }) {
    res.status(500).send(message);
  }
});

//получить ответ, не используем

// router.get("/:idcategory/:idQuestion/answer", async (req, res) => {
//   try {
//     const { idcategory } = req.params;
//     const { idQuestion } = req.params;
//     console.log(idcategory, idQuestion);
//     const questions = await Question.findOne({
//       where: { [Op.and]: [{ category_id: idcategory }, { id: idQuestion }] },
//     });
//     console.log(questions);
//     res.json({ questions });
//   } catch ({ message }) {
//     res.status(500).send(message);
//   }
// });

//проверка ответа, скор
router.put("/:idQuestion/answer/", async (req, res) => {
  try {
    const { userID } = req.body;
    const { yourAnswer } = req.body;
    const { userScore } = req.body;
    const { currentDif } = req.body;
    const { idQuestion} = req.body;
    console.log(req.body, req.params);
    const rightAnswer = await Question.findOne({
      where: { id: idQuestion },
    });
    if (rightAnswer.answer.trim().toLowerCase() === yourAnswer) {
      const newScore = Number(currentDif) + Number(userScore);
      res.app.locals.user.score=newScore
      const data = await User.update(
        { score: newScore },
        { where: { id: userID } }
      );
      res.status(200).json({ message: "you are right", score: newScore });
    } else {
      const newDif = Number(currentDif) + 1;
      const data = await Question.update(
        { difficulty: newDif },
        {
          where: { id: idQuestion },
        }
      );
      if (data[0] > 0) {
        res.status(200).json({ message: "you are wrong", difficulty: newDif });
      } else {
        res.status(400).json({ message: "ne ok" });
      }
    }
  } catch ({ message }) {
    console.log(message, "err");
    res.status(500).json({ message });
  }
});

module.exports = router;
