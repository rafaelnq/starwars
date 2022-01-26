import styled from 'styled-components';
import NavbarLink from './NavbarLink';

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLinks>
        <NavbarLink title="News + Blog" />
        <NavbarLink title="Videos" />
        <NavbarLink title="Films" />
        <NavbarLink title="Series" />
        <NavbarLink title="Interactive" />
        <NavbarLink title="Community" />
        <NavbarLink title="Databank" />
        <NavbarLink title="Disney+" />
      </NavbarLinks>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  border-top: 1px solid #343434;
  border-bottom: 1px solid #343434;
  background-color: black;
  width: 100%;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  position: fixed;
  top: 135px;
  right: 0;
  left: 0;
  z-index: 999;
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  text-transform: uppercase;
`;
