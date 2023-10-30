import './GameModes.css';

export default function GameModes({ handleGameMode }) {

    return (
        <>
            <h1 className='PageTitle'>Select your question set</h1>
            <div className='GameModes'>
                <div className='GameMode' value='0' onClick={handleGameMode}>User Added Questions</div>
                <div className='GameMode' value='1' onClick={handleGameMode}>Third Party Questions</div>
            </div>
        </>

    )
}