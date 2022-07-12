import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'; 
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const[{user}, dispatch]=useStateValue();

  return (
    <div className='app'>
      <BrowserRouter>
      {!user ? (
        <h1><Login/></h1>
      ) : (
        <>
          <Header/>
          <div className='app_body'>
            <Sidebar/>
            <Routes>
              <Route path='/'/>
              <Route path='/room/:roomId' element={<Chat />}/>
            </Routes>
          </div>
        </>
      )}
      </BrowserRouter>
    </div>
  );
}

export default App;
