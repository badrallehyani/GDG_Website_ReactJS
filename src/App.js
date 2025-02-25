// import './App.css';
import ContactUsForm from './components/ContactUsForm';
import DepartmentSection from './components/DepartmentsSection';
import Header from './components/Header';
import OurJourney from './components/OurJourney';
import PortfoliosSection from './components/PortfoliosSection';
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
      <PortfoliosSection/>
      <ContactUsForm/>
    </div>
  );
}

export default App;
