const dataStore = [{"title":"CDM", "description":"Customer Data Management"},
{"title":"DDCR", "description":"Due Diligence Client Reporting"}
]
export default function GlossaryStore(searchString){

   console.log(searchString)
   var formattedData = [];
   for(let data in dataStore){
   console.log(dataStore[data].title)
        console.log(dataStore[data].title.includes(searchString))
        if (searchString === undefined || searchString.length ===0 || dataStore[data].title.includes(searchString)){
            formattedData.push({ key: dataStore[data].title, text: dataStore[data].title, value: dataStore[data].description })
        }
        return formattedData;
   }
}