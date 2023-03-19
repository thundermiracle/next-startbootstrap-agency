import { Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

import type { FC, ReactNode } from 'react';

interface NavItemProps {
  to: string;
  onClick: () => void;
  children?: ReactNode;
}

const NavItem: FC<NavItemProps> = ({ to, onClick, children }) => {
  return (
    <Nav.Item className="contents">
      <Link
        className="text-90% font-400 py-6px color-white cursor-pointer font-heading decoration-none tracking-wider h:color-primary md:py-18px md:px-16px"
        activeClass="uno-layer-e1:color-primary"
        to={to}
        spy
        smooth="easeInOutQuart"
        onClick={onClick}
        tabIndex={-1}
        href="/"
      >
        {children || to}
      </Link>
    </Nav.Item>
  );
};

export default NavItem;
