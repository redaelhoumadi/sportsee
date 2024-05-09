import { Fragment } from 'react'
import './index.css'
import Header from '../components/Header/header'
import SideBar from '../components/Sidebar/sidebar'
import Dashboard from '../components/Dashboard/dashboard'
import Loader from '../components/Loader/loader'
import Api from '../API/Api'

function Index() {
// Appel de la fonction Api pour récupérer les données de l'utilisateur
const user = Api('http://localhost:3000','');

// Appel de la fonction Api pour récupérer les données de session
const sessions = Api('http://localhost:3000', 'activity');

// Appel de la fonction Api pour récupérer les données de sessions moyennes
const average = Api('http://localhost:3000', 'average-sessions');

// Appel de la fonction Api pour récupérer les données de performance
const performance = Api('http://localhost:3000', 'performance');

// Vérification si les données sont en cours de chargement
const isDataLoading = user === null || sessions === null || average === null || performance === null;

  
  return(
    <Fragment>
      <Header />
      <div className='main'>
        <SideBar />
        {isDataLoading ? (
          <Loader />
        ) : (
          <Dashboard 
            userName={user.data.userInfos.firstName} 
            keyData={user.data.keyData} 
            sessions={sessions.data.sessions} 
            average={average.data.sessions}
            performance={performance}
            score={user.data.score || user.data.todayScore}
          />
        )}
      </div>
    </Fragment>
  )
}

export default Index
