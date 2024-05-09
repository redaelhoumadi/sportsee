import './right_side.css';
import RightSideContent from '../RightSideContent/right_side_content'

function RightSide({keyData}) {
return (
    <div className="right-side">
    <RightSideContent keyData={keyData}/>
    </div>
)
}

export default RightSide