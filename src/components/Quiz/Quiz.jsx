import './Quiz.css';

export default function Quiz() {
    return (
        <div className='QuizContainer'>
            <div className='QuestionContainer'>
                <div className='QuestionNumber'>3/5</div>
                <div className='QuestionText'>What is a number?</div>
            </div>

            <div className='Answers'>
                <div className='Answer'>A</div>
                <div className='Answer'>B</div>
                <div className='Answer'>C</div>
                <div className='Answer'>D</div>
            </div>

        </div>
    )
}