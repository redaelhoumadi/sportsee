
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

// Définition de la fonction Radarchart prenant les données de performance comme propriété (props)
function Radarchart({performance}) {
  // Extraction des données de performance et de leur type depuis les propriétés
  let performanceData = performance.data.data; // Les données de performance
  let performanceKind = performance.data.kind; // Le type de chaque performance

  // Création d'un nouveau tableau avec les types de performances remplacés par leur nom correspondant
  let updatedPerformanceData = performanceData.map(item => {
    return {
      value: item.value, // La valeur de la performance reste la même
      kind: performanceKind[item.kind] // Remplacement du type par son nom correspondant
    };
  });

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={updatedPerformanceData}>
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="kind" tick={{ fill: "#ffffff", fontSize: 10 }} axisLine={true} tickLine={true}/>
          <PolarRadiusAxis  tickCount={6} domain={[0, 150]} axisLine={false} tick={false}/>
          <Radar name="Mike" dataKey="value" stroke="rgba(230, 0, 0, .7)" fill="#E60000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }


export default Radarchart
