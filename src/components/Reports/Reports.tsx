import Card from '../UI/Card';
import SectionHeading from '../UI/SectionHeading';
import CompletedIssuesChart from './Charts/CompletedIssuesChart';
import PieDistributionChart from './Charts/PieDistributionChart';
import ProjectProgressBar from './Charts/ProjectProgressBar';
import './Reports.scss';

interface Props {}

const Reports = ({}) => {
  return (
    <section className="reports-section">
      <SectionHeading title="Reports" />
      <div className="graphs-container">
        <Card>
          <h3 className="chart-title">Project Progress</h3>
          <div className="chart">
            <ProjectProgressBar />
          </div>
        </Card>
        <Card>
          <h3 className="chart-title">Issue Distributions</h3>
          <div className="chart">
            <PieDistributionChart />
          </div>
        </Card>
        <Card>
          <h3 className="chart-title">Completed Issues</h3>
          <div className="chart">
            <CompletedIssuesChart />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Reports;
