import './Quiz.css';
import { useState, useEffect } from 'react';


export default function Quiz({ questionSet, score, setScore, quizResults, setQuizResults, quiz, setQuiz }) {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answer, setAnswer] = useState(null);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [button, setButton] = useState(true);


    useEffect(shuffleAnswers, [currentQuestionIndex, questionSet]);

    //build in function for parsing api data and converting to readable html
    function HTMLDecode(input) {
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function shuffleAnswers() {
        setShuffledAnswers(shuffleArray([...questionSet[currentQuestionIndex].incorrect_answers, questionSet[currentQuestionIndex].correct_answer]));
    }

    function displayAnswers() {
        let answerElements = document.querySelectorAll('.Answer');
        for (let i = 0; i < answerElements.length; i++) {
            if (answerElements[i].innerText === questionSet[currentQuestionIndex].correct_answer) {
                answerElements[i].id = 'Correct'
            } else {
                answerElements[i].id = 'Incorrect'
            }
        }
    };

    function hideAnswers() {
        let answerElements = document.querySelectorAll('.Answer');
        answerElements.forEach(function (element) {
            element.id = '';
        })
    };

    function handleAnswer(event) {
        const selectedAnswer = document.querySelector('.SelectedAnswer');
        if (selectedAnswer) {
            selectedAnswer.classList.remove('SelectedAnswer');
        };

        let answer = event.target;
        answer.classList.add('SelectedAnswer');
        setAnswer(answer.innerText);
    }


    function handleConfirm() {
        setButton(!button);
        displayAnswers();

        if (answer === questionSet[currentQuestionIndex].correct_answer) {
            setScore(score + 20);
            console.log('correct');
        } else {
            setScore(score + 0);
            console.log('incorrect');
        }
    }

    function nextQuestion() {
        if (currentQuestionIndex === 4) {
            setQuizResults(!quizResults);
            setQuiz(!quiz);
        } else {
            hideAnswers();
            const selectedAnswer = document.querySelector('.SelectedAnswer');
            if (selectedAnswer) {
                selectedAnswer.classList.remove('SelectedAnswer');
            };
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setAnswer(null);
            setButton(!button);
        }
    };




    return (
        <div className='QuizContainer'>
            <div className='QuestionContainer'>
                <div className='QuestionNumber'>{currentQuestionIndex + 1}/5</div>
                <div className='QuestionText'>{HTMLDecode(questionSet[currentQuestionIndex].question)}</div>
            </div>

            <div className='Answers'>
                <div onClick={handleAnswer} className='Answer'>{HTMLDecode(shuffledAnswers[0])}</div>
                <div onClick={handleAnswer} className='Answer'>{HTMLDecode(shuffledAnswers[1])}</div>
                <div onClick={handleAnswer} className='Answer'>{HTMLDecode(shuffledAnswers[2])}</div>
                <div onClick={handleAnswer} className='Answer'>{HTMLDecode(shuffledAnswers[3])}</div>
            </div>

            <div className='Confirm' onClick={button ? handleConfirm : nextQuestion}>
                {button ? "Confirm" : "Next Question"}
            </div>

        </div>
    )
}