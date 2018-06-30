var dataStore = [{ "text": "CDM", "value": "Customer Data Management" },
{ "text": "DDCR", "value": "Due Diligence Client Reporting" }
]
export function SearchGlossary(searchString) {
    var formattedData = [];
    for (let data in dataStore) {
        if (searchString === undefined || searchString.length === 0 || dataStore[data].text.includes(searchString)) {
            formattedData.push({ key: dataStore[data].text, text: dataStore[data].text, value: dataStore[data].value });
        }

    }
    return formattedData;
}

export function AddToGlossary(text, value) {

    if (dataStore.find(v => v.text === text) === undefined) {
        dataStore.push({ key: text, text: text, value: value })
    }

}

export default { SearchGlossary, AddToGlossary }