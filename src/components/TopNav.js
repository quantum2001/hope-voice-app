import React from 'react'
import user from '../images/user.png'
import house from '../images/house.png'
import bell from '../images/bell.png'

const TopNav = () => {
    return (
        <div className='main-top-nav'>
            <div className='top-nav-item'>
                <p>The Hardware City</p>
                <div className='top-nav-links'>
                    <img src={house} alt=''></img>
                    <img src={bell} alt=''></img>
                    <img src={user} alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default TopNav
