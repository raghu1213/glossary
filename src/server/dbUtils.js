var GlossarySchema = require('./db/glossarySchema');

export async function SearchGlossary(searchString) {
    var formattedData = [];
    let dataStore
    if (searchString.length > 0) {
        dataStore = await GlossarySchema.find().byRegex(searchString).exec();
    }
    else {
        dataStore = await GlossarySchema.find().findAll().exec();        
    }
    for (let data in dataStore) {
        formattedData.push({ key: dataStore[data].title, text: dataStore[data].title, value: dataStore[data].description });
    }
    return formattedData;
}

export async function AddToGlossary(title, description) {
    let result = await GlossarySchema.find().byTitle(title).exec();
    if (result.length === 0) {
        let newItem = new GlossarySchema({
            title: title, description: description
        });
        await newItem.save();
        return { message: "Saved Successfully" }
    }
    else {
        return { message: "value already exist" }
    }

}
export async function DeleteFromGlossary(title) {
    console.log("deleting-->" + title);
    let results = await GlossarySchema.deleteOne({ "title": title })
    return { message: "Deleted Successfully" }
}

export default { SearchGlossary, AddToGlossary, DeleteFromGlossary }