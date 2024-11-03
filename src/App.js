import './App.css';
import './index.css';
import './Style/HOT.css';
import './Style/Level.css';
import './Style/DayTimeLocation.css';
import './Style/ContactUs.css';
import './Style/Register.css';
import Footer from './components/Footer';
import Body from './components/Home/Body';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HOT from './components/HOT';
import ScrollToTop from './components/ScrollToTop';
import DayTimeLocation from './components/DayTimeLocation';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Register from './components/Register';
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <DayTimeLocation />
      <div style={{ margin: '10px 5vw 10px 5vw'}}>
      <Routes>
      <Route path='/' index element={<Body />} />
      <Route path='/Header' element={<Header />} />
      <Route path='/HOT' element={<HOT />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/ContactUs' element={<ContactUs />} />
      <Route path='/Gallery' element={<Gallery  />} />
      <Route path='*' index element={<Body />} />
      </Routes>
      </div>
      <Footer style={{margin: 0}} />
    </div>
  );
}

export default App;
