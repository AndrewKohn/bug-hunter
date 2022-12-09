import { ReactNode } from 'react';
import './NavLinkButton.scss';

interface Props {
  children: ReactNode;
  icon: JSX.Element;
}

const NavLinkButton = ({ children, icon }: Props) => {
  return (
    <li>
      <button>
        {icon}
        <p className="nav-link-text">{children}</p>
      </button>
    </li>
  );
};

export default NavLinkButton;
