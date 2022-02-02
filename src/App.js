import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import ContactLists from './pages/ContactLists/ContactLists';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contactList" element={<ContactLists />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
