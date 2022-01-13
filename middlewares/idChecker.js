const data = require('../data/learnerData')

const idCheck = (req, res, next) => {
    let id = Number(req.params.id)
    if (id > data.length || id < 0) {
        res.status(404).json({message: 'NOPE'})
    }
    next()
}

// FORM ->
// {firstname: string min-length 2
// lastname: string min-length 3
// isCool: boolean
// age: numbers min 18 max 28
// }

const formCheck = (req, res, next) => {
    const test_data = req.body
    if(typeof test_data.firstname != "string" || typeof test_data.lastname != "string" || typeof test_data.password != "string" || typeof test_data.iscool != "boolean" || typeof test_data.age != "number") {
        res.status(400).json({message: "Please enter correct data types"})
    }
    if (test_data.firstname.length < 2 || test_data.lastname.length < 3 || test_data.age.length < 18 || test_data.age.length > 28 ) {
        res.status(400).json({message: "Values too long or too short"})
    }
    next()
}

module.exports = {idCheck, formCheck}