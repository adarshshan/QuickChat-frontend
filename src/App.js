import { Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy } from 'react';
const ChatPage=lazy(()=>import('./pages/ChatPage'))
const HomePage=lazy(()=>import('./pages/HomePage'))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/chats' element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
