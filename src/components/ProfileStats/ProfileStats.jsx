import './ProfileStats.css';


export default function ProfileStats({ user }) {

    function statAverage(array) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i];
        }
        return total / array.length;
    }

    return (
        <div className='ProfileStats'>
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
                        <td>{statAverage(user.overall)}%</td>
                    </tr>
                    <tr>
                        <td>Animals</td>
                        <td>{statAverage(user.animals)}%</td>
                    </tr>
                    <tr>
                        <td>History</td>
                        <td>{statAverage(user.history)}%</td>
                    </tr>
                    <tr>
                        <td>Sports</td>
                        <td>{statAverage(user.sports)}%</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}