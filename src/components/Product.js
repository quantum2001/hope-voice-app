import React from 'react'
import bag from '../images/bag.png'
import { BiShowAlt, BiTrash, BiPencil } from 'react-icons/bi'

const Product = ({ id, name, available, price }) => {
    return (
        <div className='product'>
            <div className='p-check-product'></div>
            <div className='p-image'><img src={bag} alt='' /></div>
            <div className='p-name'><p>{name}</p></div>
            <div className='p-available'><p style={{ color: available === 'Out of stock' ? 'red' : '' }}>{available}</p></div>
            <div className='p-price'><p>${price}</p></div>
            <div className='p-action'>
                <div className='action-button-container'>
                    <BiTrash className='action-button' />
                    <BiPencil className='action-button action-button-center' />
                    <BiShowAlt className='action-button' />
                </div>
            </div>
        </div>
    )
}

export default Product
