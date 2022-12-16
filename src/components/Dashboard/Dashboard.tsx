import Card from '../UI/Card';
import SectionHeading from '../UI/SectionHeading';
import './Dashboard.scss';

interface Props {}

const Dashboard = ({}) => {
  return (
    <section className="dashboard-section">
      <SectionHeading title="Dashboard" />
      <div className="overview-container">
        <Card>To Do</Card>
        <Card>In Progress</Card>
        <Card>Code Review</Card>
        <Card>Completed</Card>
      </div>
    </section>
  );
};

export default Dashboard;
