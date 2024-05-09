import './dashboard_header.css';
import { Fragment } from 'react';

function HeaderUser({userName}){
    return(
        <Fragment>
        <div className="dashboard-header">
        <h1>Bonjour</h1>
        <span className="user-name">{userName}</span>
        </div>
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2> 
        </Fragment>
        
    )
}

export default HeaderUser