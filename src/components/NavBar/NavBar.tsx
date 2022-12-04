import './NavBar.scss';
import NavLinkButton from './NavLinkButton';
import UserProfile from './UserProfile';

interface Props {}

const NavBar = ({}) => {
  return (
    <div className="nav-bar">
      <UserProfile />
      <nav>
        <ul>
          <NavLinkButton>Dashboard</NavLinkButton>
          <NavLinkButton>Projects</NavLinkButton>
          <NavLinkButton>Tickets</NavLinkButton>
          <NavLinkButton>Settings</NavLinkButton>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
