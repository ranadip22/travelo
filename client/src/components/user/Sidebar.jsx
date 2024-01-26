import './Sidebar.css'
import { Link } from "react-router-dom"

function Sidebar({ showContent, logout }) {
    return (
        <section className="sidebar">
            <aside>
                <div className="user-info">
                    <h2>User Information</h2>
                    <p>Name:</p>
                    <p></p>
                </div>
                <div className='sidebar-menu'>
                    <Link to='' onClick={() => showContent('profile')} className='sidebar-links'>Profile</Link>
                    <Link to='' onClick={() => showContent('bookings')} className='sidebar-links'>Bookings</Link>
                    <Link to='' onClick={() => showContent('settings')} className='sidebar-links'>Settings</Link>
                    <Link to='/logout' onClick={logout} className='sidebar-links'>Logout</Link>
                </div>
            </aside>
        </section>
    )
}

export default Sidebar