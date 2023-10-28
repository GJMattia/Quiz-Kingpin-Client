import './Leaderboard.css';
import LeaderboardItem from '../LeaderboardItem/LeaderboardItem';
import LeaderboardOptions from '../LeaderboardOptions/LeaderboardOptions';

export default function Leaderboard({ leaderboardData, category }) {

    let LeaderboardItems = leaderboardData.map((data, index) => (
        <LeaderboardItem data={data} index={index} key={index} category={category} />
    ));


    return (



        <table className='LeaderboardTable'>
            <thead>
                <tr>
                    <th>List</th>
                    <th>Username</th>
                    <th>Correct %</th>
                </tr>
            </thead>
            <tbody>

                {LeaderboardItems}

            </tbody>
        </table>
    )
}