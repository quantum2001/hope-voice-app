import React, { useState, useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
import { BiX } from 'react-icons/bi'
import { TiExport } from 'react-icons/ti'
import { HiPlus } from 'react-icons/hi'
import user from './images/user.png'
import house from './images/house.png'
import bell from './images/bell.png'
import BottomTab from './BottomTab'
import { data as dd } from './data'
import Product from './Product'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'



const InventoryMain = () => {
    const [search, setSearch] = useState('')
    const [currentTopTab, setCurrentTopTab] = useState(1)
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const maxPerPage = 10

    const maxPage = 5

    const listOfBottomTab = ['All', 'Power Tools', 'Fasteners', 'General Hardware', 'Hand Tools & Accessories', 'Locks & Locksets', 'Power Tool Accessories', 'Shelving Accessories']

    const changeTopTab = (newTab) => {
        setCurrentTopTab(newTab)
        setCurrentPage(1)
    }
    const updateSearch = (event) => {
        setSearch(event.target.value)
    }
    const handleSearch = (event) => {
        event.preventDefault()
        console.log(search)
        setSearch('')
    }
    const currentList = () => {
        if (currentTopTab === 1) {
            return data;
        }
        if (currentTopTab === 2) {
            return data.filter((item) => item.available === 'Out of stock');
        }
        if (currentTopTab === 3) {
            return data.filter((item) => item.available !== 'Out of stock');
        }
    }
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(currentList().length / maxPerPage); i++) {
        pageNumbers.push(i)
    }
    const pageNumbersToShow = pageNumbers.slice(currentPage < (pageNumbers.length - maxPage) ? currentPage - 1 : pageNumbers.length - (maxPage + 1), currentPage < (pageNumbers.length - maxPage) ? (currentPage + maxPage) - 1 : pageNumbers.length)
    const itemsToShow = currentList().slice((currentPage - 1) * maxPerPage, currentPage * maxPerPage)

    const nextPageSession = () => {
        setCurrentPage(currentPage < (pageNumbers.length - maxPage) ? currentPage + maxPage : currentPage + 1)
    }

    const prevPageSession = () => {
        setCurrentPage(((Math.floor((currentPage % maxPage === 0 ? currentPage - 1 : currentPage) / maxPage) * maxPage) - maxPage) + 1)
    }
    useEffect(() => {
        setData(dd)
    }, [])
    return (
        <div className='main-container'>
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
            <div className='main-content'>

                <h1>Inventory</h1>
                <div className='main-tab'>
                    <div className='left-tab'>
                        <div className={currentTopTab === 1 ? 'tab-item active-tab-top' : 'tab-item'} onClick={() => { changeTopTab(1) }}><p>All</p></div>
                        <div className={currentTopTab === 2 ? 'tab-item active-tab-top' : 'tab-item'} onClick={() => { changeTopTab(2) }}><p>Out of Stock</p></div>
                        <div className={currentTopTab === 3 ? 'tab-item active-tab-top' : 'tab-item'} onClick={() => { changeTopTab(3) }}><p>Missing Items</p></div>
                    </div>
                    <div className='right-tab'>
                        <form onSubmit={handleSearch}>
                            <div className='search-container'>
                                <button type='submit'><BsSearch /></button>
                                <input type='text' placeholder='Search' value={search} onChange={updateSearch} />
                                <button onClick={() => setSearch('')}><BiX /></button>
                            </div>

                        </form>
                        <button className='export-button'>
                            <TiExport className='export-icon' />
                            <p>Export</p>
                        </button>
                    </div>
                </div>


                <BottomTab tab={listOfBottomTab} />


                <div className='add-new-product'>
                    <button> <HiPlus className='new-product-icon' /> Add New Product </button>
                </div>

                <div className='product-table'>
                    <div className='product-header'>
                        <div className='check-product'></div>
                        <div className='product-image'><p>Image</p></div>
                        <div className='product-name'><p>Item Name</p></div>
                        <div className='product-available'><p>Available</p></div>
                        <div className='product-price'><p>Price</p></div>
                        <div className='product-action'><p>Action</p></div>
                    </div>
                    <div className='product-list'>
                        {
                            itemsToShow.map((product, index) => {
                                console.log(product)
                                return <Product {...product} id={index} key={index} />
                            })
                        }
                    </div>
                    <div className='pages-container'>
                        <div className='pages'>
                            <HiChevronLeft className='pages-icons' onClick={() => setCurrentPage(currentPage - 1)} />
                            {
                                (pageNumbersToShow[0] === 1) ? '' : <span className='page-link' onClick={prevPageSession}>...</span>

                            }
                            {

                                pageNumbersToShow.map((num) => {
                                    return <span onClick={() => setCurrentPage(num)} className={currentPage === num ? 'page-link page-link-active' : 'page-link'} key={num}>{num}</span>
                                })

                            }
                            {
                                pageNumbersToShow[pageNumbersToShow.length - 1] === pageNumbers.length ? '' : <span className='page-link' onClick={nextPageSession}>...</span>
                            }
                            <HiChevronRight className='pages-icons' onClick={() => setCurrentPage(currentPage + 1)} />
                            <input type='number' disabled='true' placeholder={pageNumbers.length} className='max' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InventoryMain
