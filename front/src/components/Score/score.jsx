import './score.css';
import Radialchart from '../PieChart/pie_chart';
function Score({score}){
    return(
        <div className="score">
        <Radialchart  score={score}/>
        </div>
    )

}

export default Score