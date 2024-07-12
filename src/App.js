import { Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
const ChatPage = lazy(() => import('./pages/ChatPage'))
const HomePage = lazy(() => import('./pages/HomePage'))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Suspense fallback={'loading'}><HomePage /></Suspense>} />
        <Route path='/chats' element={<Suspense fallback={'loading'}><ChatPage /></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
