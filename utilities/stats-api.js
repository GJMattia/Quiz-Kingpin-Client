import sendRequest from "./send-request";
const BASE_URL = 'http://localhost:4741/stats';


export async function getAll() {
    return sendRequest(BASE_URL);
};


export async function addExternalScore(score, userID) {
    try {
        await sendRequest(`${BASE_URL}/${userID}`, 'PUT', score);
    } catch (error) {
        console.error('error updating note:', error);
    }
};


export async function createStats(userID) {
    try {
        await sendRequest(`${BASE_URL}`, 'POST', userID);
    } catch (error) {
        console.error('Error creating question:', error);
    };
};