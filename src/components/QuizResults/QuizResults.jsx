import './QuizResults.css';
import { Link } from 'react-router-dom'

export default function QuizResults({ score }) {


    return (
        <div className='Results'>
            <h1>You scored {score}/100!</h1>
            <div className='Return'><Link to='/'>Return To Profile</Link></div>

        </div>
    )
}