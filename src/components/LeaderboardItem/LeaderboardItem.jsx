import './LeaderboardItem.css';
import * as statsAPI from '../../../utilities/stats-api';


export default function LeaderboardItem({ data, category, index, stats, setStats }) {


    function statAverage(array) {
        if (array.length === 0) {
            return '--'
        }
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i];
        }
        let value = total / array.length;
        return value.toFixed(2);
    };

    async function getSelectedStats() {
        try {
            const stats = await statsAPI.getSelectedStats({ selectedID: data.user._id });
            setStats(stats);
        } catch (error) {
            console.error('Error Fetching Questions', error);
        }
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data.user.name}</td>
            <td>{statAverage(data[category])}%</td>
            <td className='ProfileLink' onClick={getSelectedStats}>View</td>
        </tr>
    )
};