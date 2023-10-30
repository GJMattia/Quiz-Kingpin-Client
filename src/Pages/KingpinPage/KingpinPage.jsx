import { useState, useEffect } from 'react';
import './KingpinPage.css';
import LeaderboardOptions from '../../components/LeaderboardOptions/LeaderboardOptions';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import ViewProfile from '../../components/ViewProfile/ViewProfile';
import * as statsAPI from '../../../utilities/stats-api';


export default function KingpinPage() {

    const [viewProfileDiv, setViewProfileDiv] = useState(false);
    const [leaderboardData, setLeaderboardData] = useState(null);
    const [category, setCategory] = useState('overall');
    const [stats, setStats] = useState({
        user: { name: 'greg' },
        overall: [1],
        animals: [1],
        history: [1],
        sports: [1],
    });

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
            <h1 className='PageTitle'>Stats</h1>
            <div className='StatDiv'>
                <LeaderboardOptions category={category} setCategory={setCategory} leaderboardData={leaderboardData} setLeaderboardData={setLeaderboardData} />
                {leaderboardData && <Leaderboard leaderboardData={leaderboardData} category={category} stats={stats} setStats={setStats} setViewProfileDiv={setViewProfileDiv} />}
                {viewProfileDiv && <ViewProfile stats={stats} setViewProfileDiv={setViewProfileDiv} />}
            </div>
        </>
    )
};