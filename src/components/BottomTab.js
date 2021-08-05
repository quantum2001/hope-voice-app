import React, { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const BottomTab = ({ tab }) => {
    const [currentTab, setCurrentTab] = useState(0)
    const changeTab = (newTab) => {
        setCurrentTab(newTab)
    }
    const nextTab = () => {
        if (currentTab < tab.length - 1) {
            setCurrentTab(currentTab + 1)
        }
    }
    const prevTab = () => {
        if (currentTab > 0) {
            setCurrentTab(currentTab - 1)
        }
    }
    return (
        <div className='bottom-tab'>
            <button onClick={prevTab}><HiChevronLeft /></button>
            <div className='bottom-tab-container'>
                {
                    tab.map((tab, index) => {
                        return (
                            <div className={currentTab === index ? 'bottom-tab-item active-bottom-tab' : 'bottom-tab-item '} onClick={() => changeTab(index)} key={index}>{tab}</div>
                        )
                    })
                }

            </div>
            <button onClick={nextTab}><HiChevronRight /></button>
        </div>
    )
}

export default BottomTab
