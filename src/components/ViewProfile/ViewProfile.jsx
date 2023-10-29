import './ViewProfile.css';
import ProfileStats from '../../Components/ProfileStats/ProfileStats';

export default function ViewProfile({ stats }) {
    return (
        <div className='ProfileView'>
            <h1>{stats.user.name}</h1>
            <ProfileStats stats={stats} />
        </div>
    )
}