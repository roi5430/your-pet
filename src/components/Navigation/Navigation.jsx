import React from 'react';

// import { useSelector } from 'react-redux';
import Nav from 'components/Nav/Nav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import BurgerMenu from 'components/Burger/Burger';

import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 1279 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 765 });
  return isMobile ? children : null;
};

function Navigation() {
  return (
    <>
      <Desktop>
        <Nav />
        <AuthNav />
      </Desktop>
      <Tablet>
        <AuthNav />
        <BurgerMenu />
      </Tablet>
      <Mobile>
        <BurgerMenu>
          <AuthNav />
        </BurgerMenu>
      </Mobile>
    </>
  );
}

export default Navigation;
