import { useState } from 'react';
import './ProfileQuestion.css';
import * as questionsAPI from '../../../utilities/questions-api';


export default function ProfileQuestion({ user, question, setProfileQuestions, setEditMode, editMode, editedQuestionData, setEditedQuestionData, createQuestionDiv, setCreateQuestionDiv }) {



    async function handleDelete() {
        await questionsAPI.deleteQuestion(question._id);
        const updatedQuestions = await questionsAPI.getAll();
        setProfileQuestions(updatedQuestions);
    };

    async function activateEditMode() {
        setEditMode(!editMode);
        setEditedQuestionData(question);
        setCreateQuestionDiv(!createQuestionDiv);

    }


    return (
        <li>
            <table className="QuestionTable">
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Category</th>
                        <th>Correct</th>
                        <th>Incorrect</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{question.question}</td>
                        <td>{question.category}</td>
                        <td>{question.correct}</td>
                        <td>{question.incorrect}</td>
                        <td><button className='QuestionButton' onClick={activateEditMode}>Edit</button></td>
                        <td><button className='QuestionButton' onClick={handleDelete}>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </li>


    )
}