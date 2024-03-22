import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'

import './Navbar.css'

const Navbar = () => {
    return (
        <Nav defaultActiveKey="/home" className="Navbar mt-5 flex-column">

            <Link to={'/'} className='nav-links'>
                <h1 className='m-0'>Lara Aguerre</h1>
            </Link>
            <p className='mb-5'>Full stack developer</p>

            <div className='nav-links'>
                <Icon.ThreeDotsVertical />
                <Link to={'/projects'} className='nav-links'>Projects</Link>
            </div>
            <div className='nav-links'>
                <Icon.ThreeDotsVertical />
                <Link to={'/contact'} className='nav-links'>Contact</Link>
            </div>
            <div className='nav-links'>
                <Icon.ThreeDotsVertical />
                <Link to={'/about'} className='nav-links'>About me</Link>
            </div>
        </Nav>
    )
}

export default Navbar