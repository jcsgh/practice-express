const data = require('../data/formData')

const formCheck = (req, res, next) => {
    let firstname = req.params.firstname
    let lastname = req.params.lastname
    let password = req.params.password
    let iscool = Boolean(req.params.iscool)
    let age = Number(req.params.age)
    
    if(typeof firstname != "string" || typeof lastname != "string" || typeof password != "string" || typeof iscool != "boolean" || typeof age != "number") {
        res.status(400).json({message: "Please enter correct data types"})
    }
    if (firstname.length < 2 || lastname.length < 3 || age.length < 18 || age.length > 28 ) {
        res.status(400).json({message: "Values too long or too short"})
    }
    next()
}

module.exports = formCheck