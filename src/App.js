import { Navigate, Route, Routes } from 'react-router-dom';
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
import AddCar from './components/feature/Add-Car/AddCar';
import Details from './components/feature/Details/Details';
import Edit from './components/feature/Edit/Edit';
import DeleteCar from './components/feature/Delete/Delete.js';


import NotFound from './components/shared/NotFound/NotFound';

// import firebase from './firebase';

function App() {
  const RequireAuth = ({ children }) => {
    let user = null;
    const storedResp = localStorage.getItem('user');
    if (storedResp) {
      try {
        user = JSON.parse(storedResp);
      } catch (e) {}
    }
    if (user?.email == undefined) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div id="content">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/add-car"
          element={
            <RequireAuth>
              <AddCar />
            </RequireAuth>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/delete/:id" element={<DeleteCar />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
