import { BarChart, Bar, Rectangle, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import './bar_chart.css'

// Définition de la fonction CustomTooltip prenant les propriétés (props) payload et active
function CustomTooltip({ payload, active }) {
  // Vérification si l'infobulle est active
  if (active) {
    // Si l'infobulle est active, retourne un élément JSX pour afficher les données
    return (
      <div className="custom-tooltip">
        {/* Affichage de la valeur du premier élément de payload, le poids */}
        <p className="label">{`${payload[0].value}Kg`}</p>
        {/* Affichage de la valeur du deuxième élément de payload, les calories */}
        <p className="label">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  // Si l'infobulle n'est pas active, retourne null (aucun affichage)
  return null;
}

function Barchart({sessions}){
  return (
    
    <ResponsiveContainer width="100%" height="100%">
      <BarChart barGap={8} data={sessions} margin={{top: 10,right: 30,left: 20,bottom: 5,}}> 
        <XAxis dataKey="day" tickLine={false}/>
        <YAxis orientation="right" axisLine={false} tickLine={false} dx={10} dy={-5} />
        <Legend width={'60%'} iconType={'circle'} iconSize={'.5rem'} wrapperStyle={{ top: '-10%', right: '-11%', lineHeight: '40px',}}/>
        <Tooltip content={<CustomTooltip />}/>
        <Bar dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize={8} radius={[50, 50, 0, 0]} activeBar={<Rectangle fill="#282D30" stroke="#282D30" />} />
        <Bar dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" barSize={8} radius={[50, 50, 0, 0]} activeBar={<Rectangle fill="#E60000" stroke="#E60000" />} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Barchart
