import { useState } from 'react'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Filter from './components/Filter';
import Jobs from './components/Jobs';
import Popup from './components/Popup';
import jobimage1 from './images/image 77.png';
function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const [jobs, setJobs] = useState([
    {
      "image": { jobimage1 },
      "time": "24h Ago",
      "jobtitle": "Full Stack Developer",
      "exp": "1-3 yr Exp",
      "location": "Onsite",
      "package": "12LPA",
      "des": "A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized."
    },
    {
      "image": { jobimage1 },
      "time": "24h Ago",
      "jobtitle": "Full Stack Developer",
      "exp": "1-3 yr Exp",
      "location": "Onsite",
      "package": "12LPA",
      "des": "A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized."
    },
    {
      "image": { jobimage1 },
      "time": "24h Ago",
      "jobtitle": "Full Stack Developer",
      "exp": "1-3 yr Exp",
      "location": "Onsite",
      "package": "12LPA",
      "des": "A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized."
    },
    {
      "image": { jobimage1 },
      "time": "24h Ago",
      "jobtitle": "Full Stack Developer",
      "exp": "1-3 yr Exp",
      "location": "Onsite",
      "package": "12LPA",
      "des": "A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized."
    },
    {
      "image": { jobimage1 },
      "time": "24h Ago",
      "jobtitle": "Full Stack Developer",
      "exp": "1-3 yr Exp",
      "location": "Onsite",
      "package": "12LPA",
      "des": "A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized."
    },
    {
      "image": { jobimage1 },
      "time": "24h Ago",
      "jobtitle": "Full Stack Developer",
      "exp": "1-3 yr Exp",
      "location": "Onsite",
      "package": "12LPA",
      "des": "A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized."
    },
    {
      "image": { jobimage1 },
      "time": "24h Ago",
      "jobtitle": "Full Stack Developer",
      "exp": "1-3 yr Exp",
      "location": "Onsite",
      "package": "12LPA",
      "des": "A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized."
    },
    {
      "image": { jobimage1 },
      "time": "24h Ago",
      "jobtitle": "Full Stack Developer",
      "exp": "1-3 yr Exp",
      "location": "Onsite",
      "package": "12LPA",
      "des": "A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized."
    },
    {
      "image": { jobimage1 },
      "time": "24h Ago",
      "jobtitle": "Full Stack Developer",
      "exp": "1-3 yr Exp",
      "location": "Onsite",
      "package": "12LPA",
      "des": "A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized."
    }
  ]);
  
  return (
    <div>
    <Header onCreateJobClick={handleShow} />
    <Filter/>
    <Jobs jobs={jobs} setJobs={setJobs}/>
    <Popup show={showModal} handleClose={handleClose} />
    </div>
  )
}

export default App
