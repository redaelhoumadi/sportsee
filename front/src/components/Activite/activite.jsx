import './activite.css'
import Barchart from '../BarChart/bar_chart'
function Activite({sessions}){
return (
    <div className="activite-contnair">
    <h3 className="activite-title">Activité quotidienne</h3>
    <Barchart sessions={sessions}/>
    </div>
)
}

export default Activite