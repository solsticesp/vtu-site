import React, { Fragment, useState } from 'react';
import './Header.css';
import { menuList } from '../../shared/constants';
import Tooltip from '../Tooltip/Tooltip';

const Header = () => {
    const [visibleMenuItems, setVisibleMenuItems] = useState({});
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setVisibleMenuItems((prev) => ({ ...prev, [index]: true }));
    };

    const handleMouseLeave = (index) => {
        setVisibleMenuItems((prev) => ({ ...prev, [index]: false }));
    };

    const handleTooltipEnter = (index) => {
        setHoveredIndex(index);
    }

    const handleTooltipLeave = () => {
        setHoveredIndex(null);
    }

    return (
        <>
            <div className='header-menu'>
                <div className='main-content-container'>
                    <div className='header-items-container'>
                        <div className='header-menu-item'>
                            <Tooltip message='Вход' position='left' isShown={hoveredIndex === 0}>
                                <div
                                    className='header-item'
                                    onMouseEnter={() => handleTooltipEnter(0)}
                                    onMouseLeave={() => handleTooltipLeave()}
                                >
                                    <img className='login-icon' src="../../../images/login.svg" alt='' />
                                </div>
                            </Tooltip>
                        </div>
                        <div className='header-menu-item'>
                            <Tooltip message='Русский' position='left' isShown={hoveredIndex === 1}>
                                <div
                                    className='header-item'
                                    onMouseEnter={() => handleTooltipEnter(1)}
                                    onMouseLeave={() => handleTooltipLeave()}
                                >
                                    <img className='language-icon' src="../../../images/russia.png" alt='' /></div>
                            </Tooltip>
                        </div>
                        <div className='header-menu-item'>
                            <Tooltip message='English' position='left' isShown={hoveredIndex === 2}>
                                <div
                                    className='header-item'
                                    onMouseEnter={() => handleTooltipEnter(2)}
                                    onMouseLeave={() => handleTooltipLeave()}
                                >
                                    <img className='language-icon' src="../../../images/united-kingdom.png" alt='' /></div>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>

            <div className='header-container-wrapper'>
                <div className="main-content-container">

                    <div className="header-container">
                        <div className="logo-container">
                            <img className="coat-of-arms" src="../../../images/vt_gerb.gif" alt="VT_Gerb" />
                            <Tooltip message='Начало' position='right-start' isShown={hoveredIndex === 4}>
                                <img
                                    className="uni-logo"
                                    onMouseEnter={() => handleTooltipEnter(4)}
                                    onMouseLeave={() => handleTooltipLeave()}
                                    src="../../../images/logo-vtu.jpg" alt="VTU_Logo" 
                                />
                            </Tooltip>
                        </div>
                        <div className="menu-container">
                            <ul className='link-list'>
                                {
                                    menuList.map((item, index) => {
                                        return (
                                            <li key={index}
                                                className='menu-link'
                                                onMouseEnter={() => handleMouseEnter(index)}
                                                onMouseLeave={() => handleMouseLeave(index)}
                                            >
                                                <span>{item.name}</span><i className="arrow"></i>

                                                {visibleMenuItems[index] ?
                                                    <div className="menu-item">
                                                        <ul className='subItem-list'>
                                                            {item.subItems.map((item, index) => {
                                                                return <li key={index} className='sub-item'>{item.name}</li>
                                                            })}
                                                        </ul>
                                                    </div>
                                                    : null
                                                }
                                            </li>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;
