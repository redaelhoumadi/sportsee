import './dashboard.css'
import HeaderUser from '../UserHeader/user_header'
import LeftSide from '../LeftSide/left_side'
import RightSide from '../RightSide/right_side'

function Dashboard({userName, keyData, sessions, average, performance, score}){
    return(
        <div className="dashboard">
        <HeaderUser userName={userName}/>
        <div className='performance'>
        <LeftSide sessions={sessions} average={average} performance={performance} score={score}/>
        <RightSide keyData={keyData}/>
        </div>
        
        </div>
    )
}

export default Dashboard