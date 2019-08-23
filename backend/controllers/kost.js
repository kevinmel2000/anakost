const models = require('../models')
const Kost = models.kost
const User = models.user

// Method Get All Data
exports.index = (req, res) => {
    
    Kost.findAll({
        order : [
            ['id', 'DESC']
        ],
        include: [{
            model: User,
            as: "createdBy"
        }]
    }).then(kost=>res.send(kost))
}

// Method Show By ID
exports.show = (req, res) => {

    const id = req.params.id

    Kost.findOne({
        where : {id : id}
    }).then(kost=>res.send(kost))

} 

// Method Create Iklan
exports.store = (req, res) => {
    Kost.create(req.body).then(kost=> {
        res.send({
            message: "success",
            kost
        })
    })
}

// Method Delete Kost
exports.delete = (req, res) => {

    const id = req.params.id

    Kost.destroy({
        where : {id : id}
    }).then(kost=>res.send(kost))

} 