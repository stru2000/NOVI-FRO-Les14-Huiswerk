import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home.jsx';
import NewPostControlledComponents from './pages/NewPostControlledComponents.jsx';
import NewPostReactHook from './pages/NewPostReactHook.jsx';
import BlogOverview from './pages/BlogOverview.jsx';
import NotFound from './pages/NotFound.jsx';
import logo from './assets/logo-medium.png'
import BlogPost from "./pages/BlogPost.jsx";

function App() {
    return (

        <main className="app-container">

            <nav>
                <img src={logo} className="App-logo" alt="logo" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blogoverview">Alle posts</Link></li>
                    <li><Link to="/new-post-cc">Nieuwe post maken CC</Link></li>
                    <li><Link to="/new-post-reacthook">Nieuwe post maken React Hook</Link></li>
                </ul>
            </nav>

            <div className="outer-container">
                <div className="inner-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blogoverview" element={<BlogOverview />} />
                        <Route path="/new-post-cc" element={<NewPostControlledComponents />} />
                        <Route path="/new-post-reacthook" element={<NewPostReactHook />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/posts/:id" element={<BlogPost />} />
                    </Routes>
                </div>
            </div>

        </main>

    )
}

export default App
