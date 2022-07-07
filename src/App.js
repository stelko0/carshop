import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/core/Header/Header.js';
import Footer from './components/core/Footer/Footer';
// import Main from './components/core/Main/Main';

import Home from './components/shared/Home/Home.js';
import About from './components/shared/About/About.js';
import Contacts from './components/shared/Contacts/Contacts.js';
import Catalog from './components/shared/Catalog/Catalog';
import Register from './components/auth/Register/Register';
import Login from './components/auth/Login/Login';
import LogOut from './components/auth/Logout/Logout';

// import firebase from './firebase';

function App() {
  

  return (
    <div id="content">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={< LogOut/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
