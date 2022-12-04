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
        <p>{children}</p>
      </button>
    </li>
  );
};

export default NavLinkButton;
