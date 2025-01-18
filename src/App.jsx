import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Importa tu nuevo componente
import Create from './pages/Create'; // Importa tu nuevo componente

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/create" element={<Create/>} /> 
            </Routes>
        </Router>
    );
}

