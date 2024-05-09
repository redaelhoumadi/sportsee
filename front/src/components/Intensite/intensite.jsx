import './intensite.css'
import Radarchart from '../RadarChart/radar_chart'

function Intensite({performance}){
    return (
        <div className='intensite'>
        <Radarchart performance={performance}/>
        </div>
    )

}

export default Intensite