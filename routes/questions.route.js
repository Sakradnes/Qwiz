const express = require('express');
const router = express.Router();
const AllQuestions = require('../components/AllQuestions');


const {Question, Category} = require('../db/models');

router.get('/', async (req, res) => {
    try { 
        const questions = await Question.findAll();
        console.log(questions);
        const html = res.renderComponent(AllQuestions, {
            title: 'Questions',
            questions,
        })
        res.send(html);
        
    } catch ({message}) {
        res.status(500).send(message);
    }
})

module.exports = router