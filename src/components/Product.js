import React from 'react'
import bag from '../images/bag.png'
import { BiShowAlt, BiTrash, BiPencil } from 'react-icons/bi'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

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
                    <Link to={`/inventory/delete/${id}`} className='action-button'>
                        <BiTrash className='action-icon' />
                    </Link>
                    <Link to={`/inventory/edit/${id}`} className='action-button action-button-center'>
                        <BiPencil className='action-icon' />
                    </Link>
                    <Link to={`/inventory/view/${id}`} className='action-button'>
                        <BiShowAlt className='action-icon' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Product
