import './left_side.css'
import Activite from "../Activite/activite"
import Sessions from "../Sessions/sessions"
import Intensite from '../Intensite/intensite'
import Score from '../Score/score'


function LeftSide({sessions, average, performance, score}) {
    return (
        <div className="left-side">
        <Activite sessions={sessions}/>
        <div className='performance-details'>
        <Sessions average={average}/>
        <Intensite performance={performance}/>
        <Score  score={score}/>
        </div>
        </div>
        
    )
}

export default LeftSide