import { useState, useEffect } from 'react';
import './KingpinPage.css';
import LeaderboardOptions from '../../Components/LeaderboardOptions/LeaderboardOptions';
import Leaderboard from '../../Components/Leaderboard/Leaderboard';
import * as statsAPI from '../../../utilities/stats-api';


export default function KingpinPage() {

    const [leaderboardData, setLeaderboardData] = useState(null);
    const [category, setCategory] = useState('overall');

    useEffect(function () {
        async function getAllStats() {
            try {
                const stats = await statsAPI.getAllStats({});
                setLeaderboardData(stats);
            } catch (error) {
                console.error('Error Fetching Questions', error);
            }
        }
        getAllStats();
    }, []);


    return (
        <>
            <h1>Stats</h1>
            <LeaderboardOptions category={category} setCategory={setCategory} leaderboardData={leaderboardData} setLeaderboardData={setLeaderboardData} />
            {leaderboardData && <Leaderboard leaderboardData={leaderboardData} category={category} />}

        </>
    )
};