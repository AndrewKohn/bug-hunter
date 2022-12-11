import Card from '../UI/Card';
import CompletedIssuesChart from './Charts/CompletedIssuesChart';
import PieDistributionChart from './Charts/PieDistributionChart';
import './Reports.scss';

interface Props {}

const Reports = ({}) => {
  return (
    <section className="reports-section">
      <h2 className="section-title">reports</h2>
      <div className="graphs-container">
        {/* <Card>
          <div className="chart">
            <h3>Project Completion bar</h3>
          </div>
        </Card> */}
        <Card>
          <div className="chart">
            <PieDistributionChart />
          </div>
        </Card>
        <Card>
          <div className="chart">
            <CompletedIssuesChart />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Reports;
