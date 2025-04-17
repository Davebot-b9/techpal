import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Home from './pages/home/index';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/chat' element={<Chat/>} />
            </Routes>
        </BrowserRouter>
    );
}