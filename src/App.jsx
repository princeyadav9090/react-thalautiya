import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './pages/Start.jsx';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';
import UserContext from './context/UserContext.jsx';
import Home from './pages/Home.jsx';
import Course from './pages/Course.jsx';
import CourseInside from './pages/CourseInside.jsx';

const App = () => {
  return (
    <UserContext>
      <Router>
        <div>
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<Start />} />
            <Route path='/login' element={<UserLogin />} />
            <Route path='/signup' element={<UserSignup />} />

            {/* Protected Routes */}
            <Route
              path='/users/logout'
              element={
                <UserProtectWrapper>
                  <UserLogout />
                </UserProtectWrapper>
              }
            />
            <Route
              path='/home'
              element={
                <UserProtectWrapper>
                  <Home />
                </UserProtectWrapper>
              }
            />
            <Route
              path='/users/courses'
              element={
                <UserProtectWrapper>
                  <Course />
                </UserProtectWrapper>
              }
            />
            <Route
              path='/course/get/:id'
              element={
                <UserProtectWrapper>
                  <CourseInside />
                </UserProtectWrapper>
              }
            />
          </Routes>
        </div>
      </Router>
    </UserContext>
  );
};

export default App;