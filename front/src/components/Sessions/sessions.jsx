import './sessions.css';
import Linechart from '../LineChart/line_chart';
function Sessions({average}) {
  
    return(
      <div className='sessions'>
      <Linechart average={average}/>
      </div>
    )
  };
  export default Sessions;