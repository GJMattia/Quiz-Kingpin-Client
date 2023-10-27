import './ProfilePage.css';
import { useState, useEffect } from 'react';
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader';
import ProfileStats from '../../Components/ProfileStats/ProfileStats';
import ProfileQuestions from '../../Components/ProfileQuestions/ProfileQuestions';
import CreateQuestion from '../../Components/CreateQuestion/CreateQuestion';
import * as questionsAPI from '../../../utilities/questions-api';


export default function Profile({ user }) {
    const [profileQuestions, setProfileQuestions] = useState([]);

    const [editMode, setEditMode] = useState(false);

    const [editedQuestionData, setEditedQuestionData] = useState({});


    useEffect(function () {
        async function getQuestions() {
            try {

                const questions = await questionsAPI.getAll({ user: user._id });
                setProfileQuestions(questions);
            } catch (error) {
                console.error('Error Fetching Questions', error);
            }
        }
        getQuestions();
    }, []);


    return (
        <div className='ProfileDiv'>
            <ProfileHeader user={user} />
            <ProfileStats user={user} />
            <ProfileQuestions user={user} profileQuestions={profileQuestions} setProfileQuestions={setProfileQuestions} setEditMode={setEditMode} editMode={editMode} editedQuestionData={editedQuestionData} setEditedQuestionData={setEditedQuestionData} />
            <CreateQuestion user={user} setProfileQuestions={setProfileQuestions} setEditMode={setEditMode} editMode={editMode} editedQuestionData={editedQuestionData} setEditedQuestionData={setEditedQuestionData} />
        </div>

    )
}