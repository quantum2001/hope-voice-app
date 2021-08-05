import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import TopNav from './TopNav'
import item from '../images/item.png'
import { data } from '../data'

const EditItemMain = () => {
    const id = useParams().id
    const [currentItem, setCurrentItem] = useState({})
    useEffect(() => {
        setCurrentItem(data[id])
    }, [id])
    return (
        <div className='main-container'>
            <TopNav />
            <div className='main-content'>
                <div className='go-back-container'>
                    <Link to='/inventory' className='go-back-link'>
                        <BiArrowBack style={{ fontSize: '20px', padding: '0 15px' }} />
                        <span>Inventory</span>
                    </Link>
                </div>
                <div className='edit-item-container'>
                    <div className="item-image-container">
                        <img src={item} alt="" />
                    </div>
                    <div className="item-details-container">
                        <h1>{currentItem.name}</h1>
                        <div className="update-quantity">
                            <p>Update Quantity</p>
                            <div className="update-status">
                                <div className="available-item">
                                    {currentItem.available}
                                </div>
                                <input type="number" />
                                <button>Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default EditItemMain
