import { LineChart, Line, XAxis, Tooltip, Rectangle, ResponsiveContainer} from "recharts";
import './line_chart.css'

// Composant CustomTooltip utilisé pour personnaliser l'infobulle du graphique
function CustomTooltip({ payload, active }) {
  // Vérification si l'infobulle est active
  if (active) {
    // Si l'infobulle est active, affiche la valeur du premier élément de payload
    return (
      <span className="custom-tooltip-line">{`${payload[0].value} min`}</span>
    );
  }
}

// Composant CustomCursor utilisé pour personnaliser le curseur du graphique
const CustomCursor = (props) => {
  const { points, width, height } = props; // Déconstruction des propriétés
  const { x, y } = points[0]; // Récupération des coordonnées x et y du curseur
  return (
    // Affichage d'un rectangle comme curseur avec la couleur définie par fill et stroke
    <Rectangle
      fill="#bd0101"
      stroke="#bd0101"
      x={x}
      y={y}
      width={width}
      height={height}
    />
  );
};


export default function Linechart({average}) {

// Fonction de mapping pour remplacer les jours par leur version abrégée
function replaceDayWithAbbreviation(day) {
  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  return daysOfWeek[day - 1]; // -1 car les index commencent à 0
}

// Appliquer la fonction de mapping à chaque élément de averageData
const transformedData = average.map(session => ({
  day: replaceDayWithAbbreviation(session.day),
  sessionLength: session.sessionLength
}));

  return (
    <ResponsiveContainer width="100%" height="100%" className="radial-relative">
    <LineChart data={transformedData} >
      <XAxis dataKey="day" stroke="#fff" tick="#fff" axisLine={false} tickLine={false}/>
      <Tooltip cursor={<CustomCursor /> } content={<CustomTooltip/>}/>
      <Line type="monotone" dataKey="sessionLength" stroke="#fff"  activeDot={{ r: 2 }} dot=""/>
    </LineChart>
    <div className="session-title">Durée moyenne des sessions</div>
    </ResponsiveContainer>
    
  );
}
