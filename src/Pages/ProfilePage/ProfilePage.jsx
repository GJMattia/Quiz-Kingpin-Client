import './ProfilePage.css';
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader';
import CreateQuestion from '../../Components/CreateQuestion/CreateQuestion';


export default function Profile({ user }) {

    function statAverage(array) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[1];
        }
        return total / array.length;
    }

    return (
        <div className='ProfileDiv'>
            <ProfileHeader user={user} />
            <div className='ProfileStats'>
                <h2>Overall Average:</h2>
                <h2>{statAverage(user.stats)}</h2>

            </div>
            <div className='ProfileQuestions'>
                <h3>{user.name}'s questions</h3>
                <ul className='Questions'>
                    <li><div className='Question'>
                        <p>question</p>
                        <p>Correct %</p>
                        <button>edit</button>
                        <button>delete</button>
                    </div></li>
                    <li><div className='Question'>
                        <p>question</p>
                        <p>Correct %</p>
                        <button>edit</button>
                        <button>delete</button>
                    </div></li>
                </ul>
            </div>
            <CreateQuestion />
        </div>

    )
}