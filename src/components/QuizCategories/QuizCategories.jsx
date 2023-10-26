import './QuizCategories.css'


export default function QuizCategories({ gameMode, setQuestionSet, quizCategories, setQuizCategories, quiz, setQuiz }) {


    async function getExternalQuestions(event) {
        try {
            let code = event.target.getAttribute('value')
            const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${code}&type=multiple`);
            const data = await response.json();
            const questionSet = data.results;
            setQuestionSet(questionSet);
            setQuizCategories(!quizCategories);
            setQuiz(!quiz);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    function getUserQuestions() {
        setQuestionSet('hello');
        console.log('hello')
    }

    return (
        <div className='Categories'>
            <div className='Category' onClick={gameMode === '0' ? getUserQuestions : gameMode === '1' ? getExternalQuestions : null} value='27'>Animals</div>
            <div className='Category' onClick={gameMode === '0' ? getUserQuestions : gameMode === '1' ? getExternalQuestions : null} value='23'>History</div>
            <div className='Category' onClick={gameMode === '0' ? getUserQuestions : gameMode === '1' ? getExternalQuestions : null} value='21'>Sports</div>
        </div>

    )
}
