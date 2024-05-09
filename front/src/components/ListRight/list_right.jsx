import energy from '../../assets/energy.svg';
import path from '../../assets/Path.svg';
import apple from '../../assets/apple.svg';
import cheeseburger from '../../assets/cheeseburger.svg';
import '../RightSideContent/right_side_content.css'


function ListRight({ keyData }) {
    return (
        <div className="keydata_right">
            {/* Mapping sur les entrées de l'objet keyData */}
            {Object.entries(keyData).map(([key, value], index) => {
                // Détermination de la classe CSS à utiliser en fonction de la clé
                const className = key === 'carbohydrateCount' ? 'Glucides' : key.replace('Count', 's');
                return (
                    <div key={index} className="right-side-content">
                        {/* Icone correspondante à la clé */}
                        <span className={`icon-right-side ${className}`}>
                            <img id="" src={getImage(className)} alt={`icone ${className}`}></img>
                        </span>
                        <ul className="aside-data">
                            {/* Affichage de la valeur */}
                            <li className="aside-data-title">{value}</li>
                            {/* Affichage de la clé */}
                            <li className="aside-data-sub-title"><strong>{className}</strong></li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

// Fonction getImage pour obtenir le chemin de l'image en fonction de la classe
function getImage(className) {
    switch (className) {
        // Retourne le chemin de l'image en fonction de la classe
        case 'calories':
            return energy; // Assume que 'energy' est la variable contenant le chemin de l'image pour les calories
        case 'proteins':
            return path; // Assume que 'path' est la variable contenant le chemin de l'image pour les protéines
        case 'Glucides':
            return apple; // Assume que 'apple' est la variable contenant le chemin de l'image pour les glucides
        case 'lipids':
            return cheeseburger; // Assume que 'cheeseburger' est la variable contenant le chemin de l'image pour les lipides
        default:
            return ''; // Retourne une chaîne vide par défaut
    }
}



export default ListRight