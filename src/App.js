import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/User/Login';
import SignUp from './Components/User/SignUp';
import ContactHeader from './Components/ContactHeader/ContactHeader';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import BMI from './Components/BMI/BMI';
import DietPlan from './Components/DietPlan/DietPlan';
import HeartRate from './Components/HeartRate/HeartRate';
import Yoga from './Components/Yoga/Yoga';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import DieticianSection from './Components/DieticianSection/DieticianSection';
import ContactPage from './Components/ContactPage/ContactPage';
import { useState } from 'react';


function App() {

  const [username, setUsername] = useState("Nayan");
  const [loggedIn, setLoggedIn] = useState(0);
  // console.log(loggedIn);
  const [mode, setMode] = useState(false);

  

  return (

    <Router>
    <div className={App}>
       <ContactHeader />
       <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} username={username}/>
       <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login loggedIn={loggedIn} setUsername={setUsername} setLoggedIn={setLoggedIn}/>}></Route> 
        <Route path='/Signup' element={<SignUp loggedIn={loggedIn} setUsername={setUsername} setLoggedIn={setLoggedIn}/>}></Route> 
        <Route path='/Profile' element={<ProfilePage username={username} />}></Route> 
        <Route path='/BMI' element={<BMI />}></Route> 
        <Route path='/Dietplan' element={<DietPlan />}></Route> 
        <Route path='/Heartrate' element={<HeartRate />}></Route> 
        <Route path='/Yoga' element={<Yoga />}></Route> 
        <Route path='/Dietician' element={<DieticianSection />}></Route>
        <Route path='/ContactPage' element={<ContactPage />}></Route>
       </Routes>
       <Footer />
    </div>
    </Router>
  );
}

export default App;
