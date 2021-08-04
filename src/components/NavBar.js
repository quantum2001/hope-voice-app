import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiDashboardLine, RiHome8Fill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IoWalletOutline } from "react-icons/io5"
import { BiUser } from "react-icons/bi"
import { FaShuttleVan, FaTicketAlt } from "react-icons/fa"
import { FiSettings } from "react-icons/fi"
import logo from "../images/logo.png"

const NavBar = () => {
    const currentLocation = useLocation().pathname
    return (

        <nav>
            <div className='nav-logo'>
                <img src={logo} alt=''></img>
            </div>
            <div className='nav-link-list'>
                <Link to='/dashboard' className={currentLocation === '/dashboard' ? 'nav-link active-nav-icon' : 'nav-link'}>
                    <RiDashboardLine className='nav-icon' />
                    <p>Dashboard</p>
                </Link>
                <Link to='/cart' className={currentLocation === '/cart' ? 'nav-link active-nav-icon' : 'nav-link'}>
                    <AiOutlineShoppingCart className='nav-icon' />
                    <p>Cart</p>
                </Link>
                <Link to='/finance' className={currentLocation === '/finance' ? 'nav-link active-nav-icon' : 'nav-link'}>
                    <IoWalletOutline className='nav-icon' />
                    <p>Finance</p>
                </Link>
                <Link to='/inventory' className={currentLocation === '/inventory' ? 'nav-link active-nav-icon' : 'nav-link'}>
                    <RiHome8Fill className='nav-icon' />
                    <p>Inventory</p>
                </Link>
                <Link to='/customer' className={currentLocation === '/customer' ? 'nav-link active-nav-icon' : 'nav-link'}>
                    <BiUser className='nav-icon' />
                    <p>Customer</p>
                </Link>
                <Link to='/logistics' className={currentLocation === '/logistics' ? 'nav-link active-nav-icon' : 'nav-link'}>
                    <FaShuttleVan className='nav-icon' />
                    <p>Logistics</p>
                </Link>
                <Link to='/coupons' className={currentLocation === '/coupons' ? 'nav-link active-nav-icon' : 'nav-link'}>
                    <FaTicketAlt className='nav-icon' />
                    <p>Coupons</p>
                </Link>
                <Link to='/users' className={currentLocation === '/users' ? 'nav-link active-nav-icon' : 'nav-link'}>
                    <BiUser className='nav-icon' />
                    <p>Users</p>
                </Link>
                <Link to='/settings' className={currentLocation === '/settings' ? 'nav-link active-nav-icon' : 'nav-link'}>
                    <FiSettings className='nav-icon' />
                    <p>Settings</p>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar
