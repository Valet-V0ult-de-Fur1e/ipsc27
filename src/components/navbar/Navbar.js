import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import IPSC_KT_logo from "../../images/IPSCktlogo.png"
import IPSC_RU_logo from "../../images/IPSC-Russia-Logo.png"
import IPSC_logo from "../../images/IPSC-Logo.png"

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to="">
            <img alt='' src={IPSC_KT_logo} style={{ height: "70px", paddingRight: "10px" }} />
            <img alt='' src={IPSC_RU_logo} style={{ height: "70px", paddingRight: "10px" }} />
            <img alt='' src={IPSC_logo} style={{ height: "70px", paddingRight: "10px" }} />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="federation"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offAAQA
                  set={-80}
                >
                  Федерация
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="objects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Объекты
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="documents"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Документы
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="news"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Новости
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="media"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Медиа
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contacts"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Контакты
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#181a23" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 25px;
  /* max-width: 1100px; */
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

font-family: "Barlow Condensed",sans-serif;
font-weight: 700;
letter-spacing: .5px;
line-height: 45.6px;


`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */
  padding: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
