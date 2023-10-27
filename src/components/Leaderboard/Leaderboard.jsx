import './Leaderboard.css';
import LeaderboardItem from '../LeaderboardItem/LeaderboardItem';

export default function Leaderboard() {
    return (

        <ul className='LeaderboardList'>
            <LeaderboardItem />
            <LeaderboardItem />
            <LeaderboardItem />

        </ul>
    )
}