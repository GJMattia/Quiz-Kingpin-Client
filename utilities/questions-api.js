import sendRequest from "./send-request";
const BASE_URL = 'http://localhost:4741/questions';



export async function getAll() {
    return sendRequest(BASE_URL);
};

export async function createQuestion(questionData) {
    try {
        console.log(questionData);
        await sendRequest(`${BASE_URL}`, 'POST', questionData);
    } catch (error) {
        console.error('Error creating question:', error);
    };
};

