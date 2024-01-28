import React from 'react';
import './styles/index.scss'
import { Header } from '../modules/Header';
import { MainPage } from '../pages/MainPage';
import { Todo } from '../pages/MainPage/types';
import { formatDate } from '../components/helpers/NewData/NewData';




function App() {

  return (
    <div className="App">
      <div className="content-page">
        <Header countTodo={3} />
        <div className="page-wrapper">
          <MainPage />
        </div>

      </div>
    </div>
  );
}

export default App;
