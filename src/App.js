import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';

const App = (props) => {
  return(
    <BrowserRouter>
    <div className="app_wrapper">
        <div className='header_wrapper'>
          <Header />
        </div>
        <div className='content_wrapper'>
          <Route path='/main' render={() => <MainPage />} />
        </div>
        <div className='footer_wrapper'>
          <Footer />
        </div>
      </div>
      </BrowserRouter>
  )
}




export default App;
