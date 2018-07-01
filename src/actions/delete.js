
import axios from 'axios'
const BASE_URI = "http://localhost:3010/api"


export default async function deleteFromGlossary(title) {
    let returnedData = [];
    await axios.post(BASE_URI + "/delete?title=" + title).then(function (response) {
        returnedData = response.data;
    });
    return returnedData;
}