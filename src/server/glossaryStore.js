var dataStore = [{ "title": "CDM", "description": "Customer Data Management" },
{ "title": "DDCR", "description": "Due Diligence Client Reporting" }
]
export function SearchGlossary(searchString) {
    var formattedData = [];
    console.log(JSON.stringify(dataStore))
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
        console.log('Not found')
        dataStore.push({ title: title, description: description })
    }
    return 'Value added to store'
}

export default { SearchGlossary, AddToGlossary }