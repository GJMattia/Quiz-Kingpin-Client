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
                        <td>500%</td>
                    </tr>
                    <tr>
                        <td>Animals</td>
                        <td>500%</td>
                    </tr>
                    <tr>
                        <td>History</td>
                        <td>500%</td>
                    </tr>
                    <tr>
                        <td>Sports</td>
                        <td>500%</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}