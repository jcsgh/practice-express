const data = require('../data/learnerData')

const idCheck = (req, res, next) => {
    let id = Number(req.params.id)
    if (id > data.length || id < 0) {
        res.status(404).json({message: 'NOPE'})
    }
    next()
}

// const isNumeric = (req, res, next) => {
//     if(typeof id != "number") {
//         res.status(400).json({message: 'SUPER NOPE'})
//     }
//     next()
// }

module.exports = idCheck