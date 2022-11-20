// 1 rfce
// 2 styled
// 2.1 Link
// 2.2 Fa ,Ai
//2.15 useState
//2.16 SidebarData
import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'
// import { SidebarData } from './SidebarData'

// 2.3
const Nav = styled.div`
background: #15171c;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;
//2.7
const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height:  80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;
// 2.8
const SidebarNav = styled.nav`
background:#15171c;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index: 10;
`;
// 2.13
const SidebarWrap = styled.div`
width:100%;
`;


//2.4 Nav
//2.5 NavIcon
//2.6 FaIcon
//2.9 SidebarNav
//2.10 SidebarWrap
//2.11 NavIcon
//2.12 AiIcon.Ai  
//2.14 const sidebar, showside
// 2.15 onclick={showSidebar}
// 3.6 {SidebarData.map} , return SubMenu
//3.13 IconContext.Provider
const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: 'red' }}>
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar 