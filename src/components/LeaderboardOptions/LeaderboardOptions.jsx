import './LeaderboardOptions.css';



export default function LeaderboardOptions({ category, setCategory, leaderboardData, setLeaderboardData }) {


    function categorySelect(event) {
        const Divs = [...document.querySelectorAll('.LeaderboardOption')];
        Divs.forEach(function (div) {
            div.classList.remove('Selected')
        });
        let selected = event.target;
        let category = event.target.innerText.toLowerCase();
        selected.classList.add('Selected');
        setCategory(category);
    };

    return (
        <div className='LeaderboardOptionsDiv'>
            <div onClick={categorySelect} className='LeaderboardOption'>Overall</div>
            <div onClick={categorySelect} className='LeaderboardOption'>Animals</div>
            <div onClick={categorySelect} className='LeaderboardOption'>History</div>
            <div onClick={categorySelect} className='LeaderboardOption'>Sports</div>
        </div>
    )
};