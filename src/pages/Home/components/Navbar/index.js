import React from 'react'
import logo from '../../../../mock/images/aerolab-logo.svg'
import Nav from './styleNavbar'

const Navbar = () => {
    return (
        <Nav>
            <img src={logo} alt='aero lab logo' />
            <h2>Mi cuenta</h2>
        </Nav>
    )
}

export default Navbar;