import sendRequest from "./send-request";
const BASE_URL = 'http://localhost:4741/results';


export async function addExternalScore(score, userID) {
    try {

        await sendRequest(`${BASE_URL}/${userID}`, 'PUT', score);
    } catch (error) {
        console.error('error updating note:', error);
    }
};