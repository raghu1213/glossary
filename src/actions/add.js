
import axios from 'axios'
const BASE_URI = "http://localhost:3010/api"


export default async function addToGlossary(text,value) {
    let returnedData = [];
    await axios.post(BASE_URI + "/add", {
        title: text,
        description:value
    }).then(function (response) {
        returnedData = response.data;
    });
    return returnedData;
}