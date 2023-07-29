import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from "./Pages/SignUp"
import Login from "./Pages/Login"
import ForgotPassword from "./Pages/ForgotPassword"
import VerifyEmail from "./Pages/VerifyEmail"
import UpdatePassword from "./Pages/UpdatePassword"
import Error from "./Pages/Error"
import HomePage from "./Pages/HomePage"
import Donate from './Pages/Donate';
import Volenteer from './Pages/Volenteer';
import Contact from "./Pages/ContactUs"
import AddBenefitier from './Pages/AddBenefitier';
import DonationHistory from './Pages/DonationHistory';
import image101 from "./assets/army16.png"

import PrivateRoute from "./components/Auth/PrivateRoute"
import VisualData from './Pages/VisualData';

function App() {
  return (

    <div style={{
      background: `url(${image101})`,
     // Adjust the opacity value (0 to 1) to make the image more or less transparent
    }} className=" w-screen min-h-screen bg-richblue-25 flex flex-col font-inter">

      <div className="bg-richblack-100" style={{fontWeight:"bold", opacity: "0.93", position: "sticky", top: 0 }}>
        <Navbar />
      </div>
      <Routes>
               <Route path="/" element={<HomePage/>}/>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route
          path="forgot-password"
          element={ 
            <ForgotPassword />
          }
        />
        <Route
          path="donate"
          element={
             <PrivateRoute>
               <Donate />

             </PrivateRoute>
          }
        />
        <Route
          path="donationHistory" 
          element={
             <PrivateRoute>
               <DonationHistory />
             </PrivateRoute>
          }
        />
        <Route
          path="volenteer"
          element={
                 <PrivateRoute>

                   <Volenteer />
                 </PrivateRoute>
          }
        />
        <Route
          path="addBenefitier"
          element={
            <PrivateRoute>

              <AddBenefitier />
            </PrivateRoute>
          }
        />
        <Route
          path="contact"
          element={
            <PrivateRoute>

            <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            
            <VerifyEmail />
          }
        />
        <Route
          path="VisualData"
          element={
            
            <VisualData />
          }
        />

        <Route
          path="update-password/:id"
          element={
            <UpdatePassword />

          }
        />
        <Route path="*" element={<Error />} />
      </Routes>





    </div>

  );
}

export default App;
