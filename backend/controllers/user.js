const models = require('../models')
const User = models.user

exports.index = (req, res) => {
    
    User.findAll({
        order : [
            ['id', 'DESC']
        ]
    }).then(user=>res.send(user))
}

// Method Show By ID
exports.show = (req, res) => {

    const id = req.params.id

    User.findOne({
        where : {id : id}
    }).then(user=>res.send(user))

} 

exports.store = (req, res) => {

    User.create(req.body).then(user=> {
        res.send({
            user
        })
    })
}