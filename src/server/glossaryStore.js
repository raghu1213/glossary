const dataStore = [{ "title": "CDM", "description": "Customer Data Management" },
{ "title": "DDCR", "description": "Due Diligence Client Reporting" }
]
export default function GlossaryStore(searchString) {
    var formattedData = [];
    for (let data in dataStore) {
        if (searchString === undefined || searchString.length === 0 || dataStore[data].title.includes(searchString)) {
            formattedData.push({ key: dataStore[data].title, text: dataStore[data].title, value: dataStore[data].description })
            console.log("pushed test");
        }

    }
    return formattedData;
}