import './ProfileQuestions.css';
import ProfileQuestion from '../ProfileQuestion/ProfileQuestion';

export default function ProfileQuestions({ user, profileQuestions, setProfileQuestions, setEditMode, editMode, editedQuestionData, setEditedQuestionData }) {

    const userProfileQuestions = profileQuestions.map((question, index) => (
        <ProfileQuestion question={question} index={index} key={index} setProfileQuestions={setProfileQuestions} setEditMode={setEditMode} editMode={editMode} editedQuestionData={editedQuestionData} setEditedQuestionData={setEditedQuestionData} />
    ));

    return (
        <div className='ProfileQuestions'>
            <h3>asd</h3>
            <ul className='Questions'>
                {userProfileQuestions}
            </ul>
        </div>


    )
}