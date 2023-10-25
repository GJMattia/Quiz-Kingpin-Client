import './ProfileQuestion.css';

export default function ProfileQuestion({ user, question }) {
    return (
        <li>
            <table className="QuestionTable">
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Category</th>
                        <th>Correct</th>
                        <th>Incorrect</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{question.question}</td>
                        <td>{question.category}</td>
                        <td>{question.correct}</td>
                        <td>{question.incorrect}</td>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </li>


    )
}