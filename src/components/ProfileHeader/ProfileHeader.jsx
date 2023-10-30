import './ProfileHeader.css'
export default function ProfileHeader({ user }) {
    return (
        <div className='ProfileHeader'>
            <h1 className='Username'>{user.name}</h1>
        </div>


    )
}