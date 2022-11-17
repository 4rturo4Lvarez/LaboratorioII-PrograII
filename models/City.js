const mongoose = require('mongoose')

const City = mongoose.model('City', {
    id: Number,
    nombre: String,
    alcalde: String,
    habitantes: Number,
})

module.exports = City