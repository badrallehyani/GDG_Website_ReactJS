// import './App.css';
import DepartmentSection from './components/DepartmentsSection';
import Header from './components/Header';
import OurJourney from './components/OurJourney';
import UpperHeaderSection from './components/UpperHeaderSection';
import WorkshopSection from './components/WorkshopSection';

function App() {
  return (
    <div className="App">
      <UpperHeaderSection/>
      <Header/>
      <OurJourney/>
      <WorkshopSection/>
      <DepartmentSection/>
    </div>
  );
}

export default App;
