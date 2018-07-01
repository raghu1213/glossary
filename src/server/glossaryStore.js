var dataStore = [{ "title": "CDM", "description": "Customer Data Management" },
{ "title": "DDCR", "description": "Due Diligence Client Reporting" }
]
export function SearchGlossary(searchString) {
    var formattedData = [];
    for (let data in dataStore) {
        JSON.stringify(data);
        if (searchString === undefined || searchString.length === 0 || dataStore[data].title.includes(searchString)) {
            formattedData.push({ key: dataStore[data].title, text: dataStore[data].title, value: dataStore[data].description });
        }

    }
    return formattedData;
}

export function AddToGlossary(title, description) {
    if (dataStore.find(v => v.title === title) === undefined) {
        dataStore.push({ title: title, description: description })
    }
    return title + ' added to store'
}
export function DeleteFromGlossary(title) {
    let newStore = dataStore.filter((obj) => obj.title != title)
    dataStore = newStore;
    let msg = "DELETED --> " + title;
    return msg;
}

export default { SearchGlossary, AddToGlossary, DeleteFromGlossary }