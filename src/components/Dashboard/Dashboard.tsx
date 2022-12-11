import Card from '../UI/Card';
import './Dashboard.scss';

interface Props {}

const Dashboard = ({}) => {
  return (
    <section className="dashboard-section">
      <h2 className="section-title">Dashboard</h2>
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
