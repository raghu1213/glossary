
import axios from 'axios'
const BASE_URI = "http://localhost:3010/api"


export default async function searchGlossary(searchString) {
    let returnedData = [];
    console.log('Search action called')
    await axios.get(BASE_URI + "/search?searchString=" + searchString).then(function (response) {
        returnedData = response.data;
    });
    return returnedData;
}