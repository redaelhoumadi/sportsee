import SideBarMenu from "../SideBarMenu/sidebar_menu"
import './sidebar.css'
function SideBar(){
return (
    <div className="sidebar">
    <div className="sidebar-menu">
    <SideBarMenu />
    </div>
    <div className="copyright-contnair"><span className="copyright">Copyright, SportSee 2020</span></div>
    </div>
    
)
}

export default SideBar