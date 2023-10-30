import './AboutPage.css';
import { NavLink } from 'react-router-dom';

export default function AboutPage() {
    return (
        <>
            <h1 className='PageTitle'>About Quiz Kingpin</h1>
            <div className='AboutPage'>
                <h2>What is Quiz Kingpin?</h2>
                <p>Quiz Kingpin is an all-encompassing MERN application that I've crafted. Within this versatile platform,
                    you can embark on a plethora of quizzes categorized into three distinct areas, all while the application
                    diligently monitors your scores. Moreover, you have the power to contribute questions, inviting other users to
                    engage and provide answers, with the system meticulously keeping tabs on the performance of your queries, including
                    the frequency of correct and incorrect responses. The application further fosters a sense of community by allowing you
                    to gauge the success rates of fellow players, offering you insights into who truly reigns as the ultimate 'kingpin' of
                    each quiz category.
                </p>
                <NavLink className='PlayButton' to='/play' exact>
                    Click here to Play!
                </NavLink>
            </div>
        </>
    )
};