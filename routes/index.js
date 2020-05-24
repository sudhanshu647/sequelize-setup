const userController = require('../controllers').user;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'welcome to the Users API!',
    }));

    app.post('/api/user', userController.create);
}