import React from 'react'
import logo from '../../../../mock/images/aerolab-logo.svg'
import { Nav } from './styledNavbar'
import { User } from './User'

const Navbar = (props) => {
    return (
        <Nav>
            <img src={logo} alt='aero lab logo' />
            <User {...props}/>
        </Nav>
    )
}

export default Navbar;