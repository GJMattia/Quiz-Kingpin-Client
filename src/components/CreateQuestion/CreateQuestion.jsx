import { useState, useEffect } from 'react';
import './CreateQuestion.css'
import * as questionsAPI from '../../../utilities/questions-api';

export default function CreateQuestion({ user, setProfileQuestions, editMode, setEditMode, editedQuestionData, setEditedQuestionData }) {


    const [questionData, setQuestionData] = useState({
        user: user._id,
        category: 'Animals',
        question: '',
        correct_answer: '',
        incorrect_answers: ['', '', '']
    });

    async function addQuestion(event) {
        event.preventDefault();
        try {
            await questionsAPI.createQuestion(questionData);
            setQuestionData({
                user: user._id,
                category: 'Animals',
                question: '',
                correct_answer: '',
                incorrect_answers: ['', '', '']
            });
            const updatedProfileQuestions = await questionsAPI.getAll()
            setProfileQuestions(updatedProfileQuestions);
        } catch (error) {
            console.error('error creating note'.error)
        }
    };

    function handleInputChange(event) {
        const { name, value } = event.target;

        if (name === 'incorrect_answers') {
            const index = Number(event.target.getAttribute('data-index'));

            if (editMode) {
                const updatedIncorrectAnswers = [...editedQuestionData.incorrect_answers];
                updatedIncorrectAnswers[index] = value;
                setEditedQuestionData({
                    ...editedQuestionData,
                    incorrect_answers: updatedIncorrectAnswers,
                });
            } else {
                const updatedIncorrectAnswers = [...questionData.incorrect_answers];
                updatedIncorrectAnswers[index] = value;
                setQuestionData({
                    ...questionData,
                    incorrect_answers: updatedIncorrectAnswers,
                });
            }
        } else {
            const updatedData = editMode ? editedQuestionData : questionData;
            updatedData[name] = value;

            if (editMode) {
                setEditedQuestionData({ ...editedQuestionData, ...updatedData });
            } else {
                setQuestionData({ ...questionData, ...updatedData });
            }
        }
    }


    async function editQuestion(event) {
        event.preventDefault();
        try {
            await questionsAPI.updateQuestion(editedQuestionData._id, editedQuestionData);
            setQuestionData({
                user: user._id,
                category: 'Animals',
                question: '',
                correct_answer: '',
                incorrect_answers: ['', '', '']
            });
            const updatedProfileQuestions = await questionsAPI.getAll()
            setProfileQuestions(updatedProfileQuestions);
            setEditMode(!editMode);
            setEditedQuestionData({});

        } catch (error) {
            console.error('error creating note'.error)
        }
    };


    return (
        <>
            <h1>{editMode ? "Edit Question" : "Create New Question"}</h1>
            <form className='NewQuestionForm' onSubmit={editMode ? editQuestion : addQuestion}>
                <label>Category</label>
                <select name="category" onChange={handleInputChange} value={editMode ? editedQuestionData.category : questionData.category}>
                    <option value="Animals">Animals</option>
                    <option value="History">History</option>
                    <option value="Sports">Sports</option>
                </select>
                <label>Question</label>
                <input name="question" onChange={handleInputChange} value={editMode ? editedQuestionData.question : questionData.question} />
                <label>Correct Answer</label>
                <input name="correct_answer" onChange={handleInputChange} value={editMode ? editedQuestionData.correct_answer : questionData.correct_answer} />
                <label>Incorrect Answers</label>
                {editMode
                    ? editedQuestionData.incorrect_answers.map((answer, index) => (
                        <input
                            key={index}
                            name="incorrect_answers"
                            data-index={index}
                            onChange={handleInputChange}
                            value={answer}
                        />
                    ))
                    : questionData.incorrect_answers.map((answer, index) => (
                        <input
                            key={index}
                            name="incorrect_answers"
                            data-index={index}
                            onChange={handleInputChange}
                            value={answer}
                        />
                    ))}
                <button type="submit">{editMode ? "Edit Question" : "Add Question"}</button>
            </form>
        </>
    );
}