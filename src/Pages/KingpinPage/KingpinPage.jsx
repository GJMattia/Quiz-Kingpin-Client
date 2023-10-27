import { useState } from 'react';
import './KingpinPage.css';
import LeaderboardOptions from '../../Components/LeaderboardOptions/LeaderboardOptions';
import Leaderboard from '../../Components/Leaderboard/Leaderboard';


export default function KingpinPage() {

    const [leaderboard, setLeaderboard] = useState(true);




    return (
        <>
            <h1>Who is the kingpin?</h1>
            <LeaderboardOptions />
            {leaderboard && <Leaderboard />}

        </>
    )
};