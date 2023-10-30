import './ProfileQuestions.css';
import ProfileQuestion from '../ProfileQuestion/ProfileQuestion';

export default function ProfileQuestions({ user, profileQuestions, setProfileQuestions, setEditMode, editMode, editedQuestionData, setEditedQuestionData, createQuestionDiv, setCreateQuestionDiv }) {

    function addQuestion() {
        setCreateQuestionDiv(!createQuestionDiv)
    }

    const userProfileQuestions = profileQuestions.map((question, index) => (
        <ProfileQuestion question={question} index={index} key={index} setProfileQuestions={setProfileQuestions} setEditMode={setEditMode} editMode={editMode} editedQuestionData={editedQuestionData} setEditedQuestionData={setEditedQuestionData} createQuestionDiv={createQuestionDiv} setCreateQuestionDiv={setCreateQuestionDiv} />
    ));

    return (
        <div className='ProfileQuestions'>
            <h2>{user.name}'s Questions</h2>
            <ul className='Questions'>
                {userProfileQuestions}
            </ul>
            <button className='AddQuestion' onClick={addQuestion}>Add Question</button>
        </div>
    )
}