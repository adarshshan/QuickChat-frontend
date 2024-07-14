import { Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
import Skelten from './components/Missellesaneos/Skelten';
const ChatPage = lazy(() => import('./pages/ChatPage'))
const HomePage = lazy(() => import('./pages/HomePage'))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Suspense fallback={<Skelten />}><HomePage /></Suspense>} />
        <Route path='/chats' element={<Suspense fallback={<Skelten />}><ChatPage /></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
