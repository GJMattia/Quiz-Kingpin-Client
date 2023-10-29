import sendRequest from "./send-request";
const BASE_URL = 'http://localhost:4741/stats';

export async function getSelectedStats({ selectedID }) {
    console.log(selectedID);
    return sendRequest(`${BASE_URL}/${selectedID}/all`);
}


export async function getUserStats() {
    return sendRequest(BASE_URL);
};


export async function getAllStats() {
    return sendRequest(`${BASE_URL}/all`);

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