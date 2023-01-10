import './App.css'
import Login from './pages/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
