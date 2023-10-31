import './PlayPage.css';
import { useState } from 'react';
import GameModes from '../../components/GameModes/GameModes';
import QuizCategories from '../../components/QuizCategories/QuizCategories';
import Quiz from '../../components/Quiz/Quiz';
import QuizResults from '../../components/QuizResults/QuizResults';



export default function PlayPage({ user, quizCompleted, setQuizCompleted }) {

    // Component States
    const [gameModesDiv, setGameModesDiv] = useState(true);
    const [quizCategories, setQuizCategories] = useState(false);
    const [quiz, setQuiz] = useState(false);
    const [quizResults, setQuizResults] = useState(false);
    const [score, setScore] = useState(0);


    //Game Data States
    const [gameMode, setGameMode] = useState(null);
    const [questionSet, setQuestionSet] = useState(null);


    function handleGameMode(event) {
        let mode = event.target.getAttribute('value');
        setQuizCategories(!quizCategories);
        setGameMode(mode);
        setGameModesDiv(!gameModesDiv);
    }

    return (
        <>
            {gameModesDiv && <GameModes handleGameMode={handleGameMode} />}
            {quizCategories && <QuizCategories gameMode={gameMode} setQuestionSet={setQuestionSet} quizCategories={quizCategories} setQuizCategories={setQuizCategories} quiz={quiz} setQuiz={setQuiz} />}
            {quiz && <Quiz user={user} gameMode={gameMode} questionSet={questionSet} score={score} setScore={setScore} quizResults={quizResults} setQuizResults={setQuizResults} quiz={quiz} setQuiz={setQuiz} />}
            {quizResults && <QuizResults score={score} />}
        </>
    )
}