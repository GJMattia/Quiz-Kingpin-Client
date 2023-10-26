import sendRequest from "./send-request";
const BASE_URL = 'http://localhost:4741/questions';



export async function getAll() {
    return sendRequest(BASE_URL);
};

export async function createQuestion(questionData) {
    try {
        await sendRequest(`${BASE_URL}`, 'POST', questionData);
    } catch (error) {
        console.error('Error creating question:', error);
    };
};

export async function deleteQuestion(questionID) {
    try {
        await sendRequest(`${BASE_URL}/${questionID}`, 'DELETE');
    } catch (error) {
        console.error('error deleting note:', error);
    }
};

export async function updateQuestion(questionID, questionData) {
    try {
        await sendRequest(`${BASE_URL}/${questionID}`, 'PUT', questionData);
    } catch (error) {
        console.error('error updating note:', error);
    }
};



