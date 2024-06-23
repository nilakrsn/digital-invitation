import logo from './logo.svg';
import './App.css';
import PopUp from './pages/PopUp';
import Cover from './pages/Cover';
import Countdown from './pages/Countdown';
import EventPage from './pages/EventPage';
import Maps from './pages/Maps';
import DetailEvent from './pages/DetailEvent';
import RSVP from './pages/RSVP';
import Gift from './pages/Gift';
import ThanksPage from './pages/ThanksPage';
import Prewedding from './pages/Prewedding';
import Footer from './pages/Footer';
import UploadImage from './assets/UploadImage';

function App() {
  return (
    <div>
      <PopUp/>
      <Cover/>
      <Countdown/>
      <EventPage/>
      <DetailEvent/>
      <Maps/>
      <RSVP/>
      <Gift/>
      <ThanksPage/>
      <Prewedding/>
      <Footer/>
    </div>
  );
}

export default App;
