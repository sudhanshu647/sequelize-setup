const User = require('../models').User;

module.exports = {
    create(req, res) {
        return User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
        })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },
};
