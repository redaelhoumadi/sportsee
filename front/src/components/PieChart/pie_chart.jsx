import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './pie_chart.css'; 

// Définition du composant Radialchart prenant le score comme propriété (props)
function Radialchart({score}) {
  // Création des données à afficher dans le diagramme circulaire (score et le reste pour totaliser 100%)
  const scoreData =[
    {name: "Score", value: score * 100}, // Le score en pourcentage
    {name: "total", value: 100 - score * 100}, // Le reste pour totaliser 100%
  ];

  const scorecentage = score * 100; // Calcul du score en pourcentage

  return (
    <ResponsiveContainer width="100%" height="100%" className="radial-relative">
      
      <PieChart> 
        <Pie
          data={scoreData}
          dataKey="value"
          startAngle={210}
          endAngle={-210}
          innerRadius="70%"
          outerRadius="80%"
          cornerRadius="50%"
        >
          <Cell fill="#FF0000" stroke="#e60000"/> 
          <Cell fill="transparent" stroke="transparent"/>
        </Pie>
        <Pie
          data={[{name: "circle", value: 100}]}
          dataKey="value"
          startAngle={210}
          endAngle={-210}
          outerRadius="70%"
          fill="white"
        />
      </PieChart>
      
      <h4 className='score-legend'>Score</h4>
      
      <div className='today-performance'>
        <span className='scorecentage'>{scorecentage} %</span>
        <span> de votre objectif</span>
      </div>
    </ResponsiveContainer>
  );
}

export default Radialchart; 
