import './QuizResults.css';
import { Link } from 'react-router-dom'

export default function QuizResults({ score }) {


    return (
        <div className='Results'>
            <h1 className='ResultsTitle'>You scored {score}/100!</h1>
            <Link className='Return' to='/profile'>Return To Profile</Link>

        </div>
    )
}