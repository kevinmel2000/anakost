const models = require('../models')
const User = models.user

exports.store = (req, res) => {
    User.create(req.body).then(user=> {
        res.send({
            message: "success",
            user
        })
    })
}