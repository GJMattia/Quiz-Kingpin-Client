import './Leaderboard.css';
import LeaderboardItem from '../LeaderboardItem/LeaderboardItem';
import LeaderboardOptions from '../LeaderboardOptions/LeaderboardOptions';

export default function Leaderboard({ leaderboardData, category, stats, setStats }) {

    let LeaderboardItems = leaderboardData.map((data, index) => (
        <LeaderboardItem data={data} index={index} key={index} category={category} stats={stats} setStats={setStats} />
    ));


    return (

        <table className='LeaderboardTable'>
            <thead>
                <tr>
                    <th>List</th>
                    <th>Username</th>
                    <th>Correct %</th>
                    <th>Full Profile</th>
                </tr>
            </thead>
            <tbody>

                {LeaderboardItems}

            </tbody>
        </table>
    )
}