const router = require('express').Router()

const Registration = require('../../components/Registration');

module.exports = router.get('/registration', (req, res) => {
    const html = res.renderComponent(Registration, {
        title: 'Registration',
      })
    res.send(html);
})