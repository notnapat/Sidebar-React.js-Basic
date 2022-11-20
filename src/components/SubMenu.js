// 3 react , Link , styled
// 3.10 useState
import React , {useState} from "react";
import { Link } from "react-router-dom";
// import { isHtmlElement } from "react-router-dom/dist/dom";
import styled from "styled-components";
// import { SidebarData } from "./SidebarData";

// 3.1
const SidebarLink = styled(Link)`
display:flex;
color: #eee le 9fc;
justify-content:  space-between;
align-items: center;
padding: 20px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 18px;

&:hover{
    background: #252831;
    border-left: 4px solid #532ce4;
    cursor: pointer;
}
`
// 3.12
const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;
//3.4
const SidebarLabel = styled.span`
margin:16px;`
// 3.2 const Submenu
// 3.3 sidebarLink item.path
// 3.5 div, item.icon , SidebarLabe 
// 3.7 ({item}) == SubMenu ({item})
// 3.8 div, {item.subNav && subNav ,item. , null}
// 3.9 const subnav , ShowSubnav
// 3.11 {subnav ,return, DropdowqLink {item.icon}, SidebarLabe}
const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    
    const showSubnav = () => setSubnav(!subnav);
    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpoend
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
};

export default SubMenu;