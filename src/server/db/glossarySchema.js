
var mongoose = require('mongoose')

var glossarySchema = new mongoose.Schema({
    title: String,
    description: String

});

glossarySchema.query.byRegex = function (searchString) {
    //return this.find({ title: { $regex: "/" + searchString + "/i" } })
    return this.find({
        "title":
            { $regex: new RegExp(searchString, "i") }
    }
    );
}
glossarySchema.query.byTitle = function (title) {
    return this.find({ title: title });
}

var glossaryModel = mongoose.model('glossary', glossarySchema, 'glossary');
module.exports = glossaryModel;



