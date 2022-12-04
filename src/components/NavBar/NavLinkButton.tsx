import { ReactNode } from 'react';
import './NavLinkButton.scss';

interface Props {
  children: ReactNode;
}

const NavLinkButton = ({ children }: Props) => {
  return (
    <li>
      <button>
        <p>{children}</p>
      </button>
    </li>
  );
};

export default NavLinkButton;
