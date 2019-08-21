const models = require('../models')
const Kost = models.kost
const User = models.user

exports.index = (req, res) => {
    
    Kost.findAll({
        where : {
            is_order : 1
        },
        include: [{
            model: User,
            as: "createdBy"
        }]
    }).then(kost=>res.send(kost))
}

exports.show = (req, res) => {

    const id = req.params.id

    Kost.findAll({
        where : {id : id}
    }).then(kost=>res.send(kost))

} 

exports.store = (req, res) => {
    Kost.create(req.body).then(kost=> {
        res.send({
            message: "success",
            kost
        })
    })
}