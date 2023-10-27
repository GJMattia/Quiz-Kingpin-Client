import './ProfilePage.css';
import { useState, useEffect } from 'react';
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader';
import ProfileStats from '../../Components/ProfileStats/ProfileStats';
import ProfileQuestions from '../../Components/ProfileQuestions/ProfileQuestions';
import CreateQuestion from '../../Components/CreateQuestion/CreateQuestion';
import * as questionsAPI from '../../../utilities/questions-api';
import * as statsAPI from '../../../utilities/stats-api';


export default function Profile({ user }) {

    const [profileQuestions, setProfileQuestions] = useState([]);

    const [editMode, setEditMode] = useState(false);

    const [editedQuestionData, setEditedQuestionData] = useState({});

    const [stats, setStats] = useState(null);


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
        async function getStats() {
            try {
                const stats = await statsAPI.getAll({ user: user._id });
                setStats(stats);
            } catch (error) {
                console.error('Error Fetching Questions', error);
            }
        }
        getStats();
    }, []);


    return (
        <div className='ProfileDiv'>
            <ProfileHeader user={user} />
            {stats && <ProfileStats user={user} stats={stats} setStats={setStats} />}
            <ProfileQuestions user={user} profileQuestions={profileQuestions} setProfileQuestions={setProfileQuestions} setEditMode={setEditMode} editMode={editMode} editedQuestionData={editedQuestionData} setEditedQuestionData={setEditedQuestionData} />
            <CreateQuestion user={user} setProfileQuestions={setProfileQuestions} setEditMode={setEditMode} editMode={editMode} editedQuestionData={editedQuestionData} setEditedQuestionData={setEditedQuestionData} />
        </div>

    )
}