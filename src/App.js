import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Navigate from './Components/Navigate';
import ChatArea from './Components/ChatArea';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
      <Sidebar />
      <ChatArea />
    </>
    // <BrowserRouter>
    // <Navigate />
    //   <Routes>
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
