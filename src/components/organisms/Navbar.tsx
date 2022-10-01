import clsx from 'clsx';
import { Navbar as RBNavbar, Container as RBContainer, Nav as RBNav } from 'react-bootstrap';
import { useCallback, useState } from 'react';

import NavItem from '../atoms/NavItem';
import useWindowOnScroll from '../../hooks/useWindowOnScroll';
import useSmoothScrollTo from '../../hooks/useSmoothScrollTo';

import type { FC, ReactNode } from 'react';

interface NavbarProps {
  brand: string;
  menuText?: string;
  menus: {
    anchor: string;
    text?: string;
  }[];
  extraItems?: ReactNode;
}

const navbarCss = 'fixed-top bg-#212529';
const navbarCssMd = 'md:bg-transparent md:transition-padding md:duration-300 md:b-none md:py-8px';
const brandCss = 'cursor-pointer color-primary font-script';
const brandCssMd = 'md:text-30px md:transition-all md:duration-300';
const togglerCss =
  'text-12px right-0 p-13px uppercase color-white b-0 bg-primary font-heading flex gap-3px';

const brandShrink = 'uno-layer-e1:md:text-20px uno-layer-e1:md:py-12px';
const navbarShrink = 'uno-layer-e1:md:py-0 uno-layer-e1:md:bg-#212529';

const Navbar: FC<NavbarProps> = ({ brand, menuText, menus, extraItems }) => {
  const handleScrollToTop = useSmoothScrollTo(0);

  const [expanded, setExpanded] = useState(false);
  const toggleMenu = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);
  const closeMenu = useCallback(() => {
    setExpanded(false);
  }, []);
  const handleBrandClick = useCallback(() => {
    closeMenu();
    handleScrollToTop();
  }, [closeMenu, handleScrollToTop]);

  const [shrink, setShrink] = useState(false);
  const handleWindowScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShrink(scrollTop > 100);
  }, []);
  useWindowOnScroll(handleWindowScroll);

  return (
    <RBNavbar
      className={clsx(navbarCss, navbarCssMd, { [`${navbarShrink}`]: shrink })}
      expand="lg"
      expanded={expanded}
    >
      <RBContainer>
        <RBNavbar.Brand
          className={clsx(brandCss, brandCssMd, { [`${brandShrink}`]: shrink })}
          onClick={handleBrandClick}
        >
          {brand}
        </RBNavbar.Brand>
        <RBNavbar.Toggle onClick={toggleMenu} aria-label="Toggle navigation" className={togglerCss}>
          {menuText}
          <div className="i-fa-bars" />
        </RBNavbar.Toggle>
        <RBNavbar.Collapse>
          <RBNav className="uppercase ms-auto">
            {menus.map(({ anchor, text }) => (
              <NavItem key={anchor} to={anchor} onClick={closeMenu}>
                {text}
              </NavItem>
            ))}
          </RBNav>
          {extraItems}
        </RBNavbar.Collapse>
      </RBContainer>
    </RBNavbar>
  );
};

export default Navbar;
