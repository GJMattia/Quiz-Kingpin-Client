import './LeaderboardItem.css'

export default function LeaderboardItem({ data, category, index }) {


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

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data.user.name}</td>
            <td>{statAverage(data[category])}%</td>
        </tr>
    )
};