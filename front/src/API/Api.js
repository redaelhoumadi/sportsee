import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Api(url, category) {
  // État local pour stocker les données de l'utilisateur
  const [dataUser, setData] = useState(null);
  
  // Récupération du paramètre userId de l'URL à l'aide du hook useParams
  const { userId } = useParams();

  // Utilisation de useEffect pour effectuer une action au chargement du composant
  useEffect(() => {
    // Fonction fetchData pour récupérer les données de l'utilisateur depuis l'API
    const fetchData = async () => {
      try {
        // Effectue une requête à l'API en fonction de la catégorie spécifiée
        // et du userId récupéré de l'URL
        const response = await fetch(category ? `${url}/user/${userId}/${category}` : `${url}/user/${userId}`);
        
        // Vérifie si la réponse de la requête est OK
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        
        // Convertit la réponse en format JSON
        const dataUser = await response.json();
        
        // Met à jour l'état local dataUser avec les données récupérées de l'API
        setData(dataUser);
       
      } catch (error) {
        // Gestion des erreurs potentielles lors de la récupération des données
        console.error('Erreur lors de la récupération des données : ', error);
      }
    };

    // Appelle la fonction fetchData pour récupérer les données lors du chargement du composant
    fetchData();
  }, []); // Dépendances vides pour s'assurer que useEffect s'exécute une seule fois après le montage du composant
  
  // Retourne les données de l'utilisateur
  return dataUser;
}

export default Api;
