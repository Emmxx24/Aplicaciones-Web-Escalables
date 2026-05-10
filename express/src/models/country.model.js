const mongoose = require('mongoose');

//La estructura de los archivos
const countrySchema = mongoose.Schema({
    name: String, 
    capital: String,
    region: String,
    population: Number,
    flag: String,
});

module.exports = mongoose.model("Country", countrySchema);