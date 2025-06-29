import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/ErrorBoundary';
// import './App.css'; // We'll add our custom styles here
import PostList from './components/PostList';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import Dataurl from './components/Dataurl';

// Screen Components
const HomeScreen = () => <h1 className="m-4">Home</h1>;
const ProfileScreen = () => <h1 className="m-4">Profile Screen</h1>;
const ShopScreen = () => {
  throw new Error('An error has occured.');
};

function App() {
  return (
    <div className="app-container">
      <nav className="navbar navbar-expand-lg navbar-#4444db bg-white">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item" >
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/profile" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/shop" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Shop
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      
      <main className="container mt-4">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/shop" element={<ShopScreen />} />
          </Routes>
        </ErrorBoundary>
      </main>

      <PostList/>
      <Example1/>
      <Example2/>
      <Example3/>
      <Dataurl/>
    </div>
  );
}

export default App;