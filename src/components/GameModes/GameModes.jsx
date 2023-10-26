import './GameModes.css';

export default function GameModes({ handleGameMode }) {

    return (
        <div className='GameModes'>
            <div className='GameMode' value='0' onClick={handleGameMode}>User Added Questions</div>
            <div className='GameMode' value='1' onClick={handleGameMode}>Internet Questions</div>
        </div>


    )
}