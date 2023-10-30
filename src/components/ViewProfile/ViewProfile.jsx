import './ViewProfile.css';
import ProfileStats from '../../Components/ProfileStats/ProfileStats';

export default function ViewProfile({ stats, setViewProfileDiv }) {

    function closeProfile() {
        setViewProfileDiv(false);
    }
    return (
        <div className='ProfileView'>
            <h1 className='Username'>{stats.user.name}</h1>
            <ProfileStats stats={stats} />
            <button onClick={closeProfile} className='CloseProfile'>Close</button>
        </div>
    )
}