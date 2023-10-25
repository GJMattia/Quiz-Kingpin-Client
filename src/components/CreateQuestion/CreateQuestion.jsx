import './CreateQuestion.css'

export default function CreateQuestion() {
    return (
        <>
            <h1>Create New Question</h1>
            <form className='NewQuestionForm'>
                <label>Category</label>
                <select>
                    <option value="Sports">Sports</option>
                    <option value="Science">Science</option>
                    <option value="Film">Film</option>
                </select>
                <label>Question</label>
                <input />
                <label>Correct Answer</label>
                <input />
                <label>Incorrect Answer</label>
                <input />
                <button>Add Question</button>
            </form>
        </>
    )
}