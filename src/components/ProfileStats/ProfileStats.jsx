import './ProfileStats.css';


export default function ProfileStats({ user, stats, setStats }) {

    function statAverage(array) {
        if (array.length === 0) {
            return 'N/A'
        };

        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i];
        }
        let value = total / array.length;
        return value.toFixed(2);
    }

    return (
        <div className='StatsDiv'>
            <h2>Stats</h2>
            <table className='StatsTable'>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Overall</td>
                        <td>{statAverage(stats.overall)}%</td>
                    </tr>
                    <tr>
                        <td>Animals</td>
                        <td>{statAverage(stats.animals)}%</td>
                    </tr>
                    <tr>
                        <td>History</td>
                        <td>{statAverage(stats.history)}%</td>
                    </tr>
                    <tr>
                        <td>Sports</td>
                        <td>{statAverage(stats.sports)}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}