const jwt = require('jsonwebtoken')

const User = require('../models').user

exports.login = (req, res) => {

    const email = req.body.email
    const password = req.body.password

    // Check User
    User.findOne({where : {email}})
    .then(user => {

        if(user) {

            if(password === user.password) {

                const payload = {
                    userId : user.id,
                    phone : user.phone
                }

                const token = jwt.sign(payload, 'key-anakost')
                
                res.send({
                    token
                })

            } else {
                res.send({
                    error : true,
                    message: "Invalid Password!"
                })
            }

        } else {
            res.send({
                error : true,
                message: "Email Not Registered!"
            })
        }

    })
}