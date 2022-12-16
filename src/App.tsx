import './App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Reports from './components/Reports/Reports';

const App = ({}) => {
  return (
    <main>
      <NavBar />
      {/* <Dashboard /> */}
      {/* <Reports /> */}
      <Projects />
    </main>
  );
};

export default App;
