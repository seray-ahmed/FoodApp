import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'
import SearchBar from './SearchBar'

const Navbar = ({ setData }) => {

    return (
        <div>
            <div className='topnav'>
                <ul>
                    <li>
                        <Link to='/add'>Add</Link>
                    </li>
                    <li>
                        <Link to='/'>Index</Link>
                    </li>
                    <SearchBar setData={setData} />
                </ul>
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar