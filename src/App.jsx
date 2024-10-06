import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Popular from './pages/Popular';
import Movies from './pages/Movies';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Favorites from './pages/Favorites';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies/:id" element={<Movies />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="//category/:id" element={<Category />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
