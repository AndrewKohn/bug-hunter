import './NavBar.scss';
import { IconContext } from 'react-icons';
import { RxDashboard, RxComponent1 } from 'react-icons/rx';
import { GoCode, GoGraph, GoIssueOpened, GoSettings } from 'react-icons/go';
import NavLinkButton from './NavLinkButton';
import UserProfile from './UserProfile';

interface Props {}

const NavBar = ({}) => {
  const addIcon = (icon: JSX.Element) => (
    <IconContext.Provider value={{ size: '24px' }}>{icon}</IconContext.Provider>
  );

  return (
    <div className="nav-bar">
      <UserProfile />
      <nav>
        <ul>
          <NavLinkButton icon={addIcon(<RxDashboard />)}>
            Dashboard
          </NavLinkButton>
          <NavLinkButton icon={addIcon(<GoGraph />)}>Reports</NavLinkButton>
          <NavLinkButton icon={addIcon(<RxComponent1 />)}>
            Projects
          </NavLinkButton>
          <NavLinkButton icon={addIcon(<GoIssueOpened />)}>
            Issues
          </NavLinkButton>
          <NavLinkButton icon={addIcon(<GoCode />)}>Repository</NavLinkButton>
          <NavLinkButton icon={addIcon(<GoSettings />)}>Settings</NavLinkButton>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
