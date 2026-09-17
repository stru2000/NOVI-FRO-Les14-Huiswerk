import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home.jsx';
import NewPost from './pages/NewPost.jsx';
import BlogOverview from './pages/BlogOverview.jsx';
import NotFound from './pages/NotFound.jsx';
import logo from './assets/logo-white.png'
import BlogPost from "./pages/BlogPost.jsx";

function App() {
    return (

        <main>

            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blogoverview">Alle posts</Link></li>
                    <li><Link to="/new-post">Nieuwe post maken</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blogoverview" element={<BlogOverview />} />
                <Route path="/new-post" element={<NewPost />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/posts/:id" element={<BlogPost />} />
            </Routes>




    </main>

    )
}

export default App
