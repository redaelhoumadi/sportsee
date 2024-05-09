import yoga from '../../assets/yoga.svg'
import natation from '../../assets/natation.svg'
import musculation from '../../assets/musculation.svg'
import cyclisme from '../../assets/cyclisme.svg'
import './sidebar_menu.css';
import { Fragment } from 'react';
function SideBarMenu(){
return (
    <Fragment>
    <a className='sidebar_menu_element' href="/"><img alt="Yoga" src={yoga}/></a>
    <a className='sidebar_menu_element' href="/"><img alt="Yoga" src={natation}/></a>
    <a className='sidebar_menu_element' href="/"><img alt="Yoga" src={cyclisme}/></a>
    <a className='sidebar_menu_element' href="/"><img alt="Yoga" src={musculation}/></a>
    </Fragment>
    
)
}

export default SideBarMenu;