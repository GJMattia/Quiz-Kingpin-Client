import './ProfilePage.css';
import { useState, useEffect } from 'react';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfileStats from '../../components/ProfileStats/ProfileStats';
import ProfileQuestions from '../../components/ProfileQuestions/ProfileQuestions';
import CreateQuestion from '../../components/CreateQuestion/CreateQuestion';
import * as questionsAPI from '../../../utilities/questions-api';
import * as statsAPI from '../../../utilities/stats-api';


export default function Profile({ user }) {

    const [profileQuestions, setProfileQuestions] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedQuestionData, setEditedQuestionData] = useState({});
    const [stats, setStats] = useState(null);
    const [createQuestionDiv, setCreateQuestionDiv] = useState(false);


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

    useEffect(function () {
        async function getUserStats() {
            try {
                const stats = await statsAPI.getUserStats({ user: user._id });
                setStats(stats);
            } catch (error) {
                console.error('Error Fetching Questions', error);
            }
        }
        getUserStats();
    }, []);


    return (
        <div className='ProfileDiv'>
            <ProfileHeader user={user} />
            {stats && <ProfileStats user={user} stats={stats} setStats={setStats} />}
            {profileQuestions && <ProfileQuestions user={user} profileQuestions={profileQuestions} setProfileQuestions={setProfileQuestions} setEditMode={setEditMode} editMode={editMode} editedQuestionData={editedQuestionData} setEditedQuestionData={setEditedQuestionData} createQuestionDiv={createQuestionDiv} setCreateQuestionDiv={setCreateQuestionDiv} />}
            {createQuestionDiv && <CreateQuestion user={user} setProfileQuestions={setProfileQuestions} setEditMode={setEditMode} editMode={editMode} editedQuestionData={editedQuestionData} setEditedQuestionData={setEditedQuestionData} createQuestionDiv={createQuestionDiv} setCreateQuestionDiv={setCreateQuestionDiv} />}
        </div>

    )
}