import './PlayPage.css';
import { useState } from 'react';
import Quiz from '../../Components/Quiz/Quiz';


export default function Play({ user }) {

    const [quiz, setQuiz] = useState(3);

    return (
        <>
            <h1>hello {user.name}</h1>
            <div className='Categories'>
                <div className='Category'> sports</div>
                <div className='Category'> sports</div>
                <div className='Category'> sports</div>
                <div className='Category'> sports</div>
                <div className='Category'> sports</div>
                <div className='Category'> sports</div>
            </div>
            {quiz && <Quiz />}
        </>
    )
}