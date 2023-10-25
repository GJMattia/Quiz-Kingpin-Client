import './ProfileHeader.css'
export default function ProfileHeader({ user }) {
    return (
        <div className='ProfileHeader'>
            <div className='ProfilePicture'></div>
            <h1>{user.email}</h1>
        </div>


    )
}