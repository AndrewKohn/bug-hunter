import './UserProfile.scss';

interface Props {}

const UserProfile = ({}) => {
  const user: string = 'Andrew Kohn';

  return (
    <div className="user-profile">
      {/* [TODO]  clicking on user button will edit user settings, such as change name, color, etc... */}
      <button>
        <span>
          {user.split(' ')[0].charAt(0)}
          {user.split(' ')[1].charAt(0)}
        </span>
      </button>

      <div className="user-text-container">
        <p>Welcome,</p>
        <p>{user}</p>
      </div>
    </div>
  );
};

export default UserProfile;
