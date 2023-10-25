import { useState, useEffect } from 'react';
import './CreateQuestion.css'
import * as questionsAPI from '../../../utilities/questions-api';

export default function CreateQuestion({ user }) {



    const [questionData, setQuestionData] = useState({
        user: user._id,
        category: 'Animals',
        question: '',
        correct_answer: '',
        incorrect_answers: ['', '', ''],
    });





    async function addQuestion(event) {
        event.preventDefault();
        try {
            console.log(questionData);
            await questionsAPI.createQuestion(questionData);
        } catch (error) {
            console.error('error creating note'.error)
        }
    };

    function handleInputChange(event) {
        const { name, value } = event.target;

        if (name === 'incorrect_answers') {
            const incorrect_answers = [...questionData.incorrect_answers];
            const index = Number(event.target.getAttribute('data-index'));
            incorrect_answers[index] = value;

            setQuestionData({
                ...questionData,
                incorrect_answers,
            });
        } else {
            setQuestionData({
                ...questionData,
                [name]: value,
            });
        }
    }

    return (
        <>
            <h1>Create New Question</h1>
            <form className='NewQuestionForm' onSubmit={addQuestion}>
                <label>Category</label>
                <select name="category" onChange={handleInputChange} value={questionData.category}>
                    <option value="Animals">Animals</option>
                    <option value="History">History</option>
                    <option value="Sports">Sports</option>
                </select>
                <label>Question</label>
                <input name="question" onChange={handleInputChange} value={questionData.question} />
                <label>Correct Answer</label>
                <input name="correct_answer" onChange={handleInputChange} value={questionData.correct_answer} />
                <label>Incorrect Answers</label>
                {questionData.incorrect_answers.map((answer, index) => (
                    <input
                        key={index}
                        name="incorrect_answers"
                        data-index={index}
                        onChange={handleInputChange}
                        value={answer}
                    />
                ))}
                <button type="submit">Add Question</button>
            </form>
        </>
    )
}