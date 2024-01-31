import React from 'react';
import './styles/index.scss'
import { Header } from '../modules/Header';
import { MainPage } from '../pages/MainPage';
import { Todo } from '../pages/MainPage/types';
import { formatDate } from '../components/helpers/NewData/NewData';
import { Sidebar } from '../components/Sidebar';




function App() {

  return (
    <div className="App">
      <Header />
      <div className="content-page">
        {/* <Sidebar /> */}
        <div className="page-wrapper">
          <MainPage />
        </div>

      </div>
    </div>
  );
}

export default App;
