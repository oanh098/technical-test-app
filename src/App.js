import './App.css';
import About from './about';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import FetchData from './fetchData';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/about" Component={About}/>
        <Route exact path="/fetchData" Component={FetchData}/>
      </Routes>
    </Router>
    
  </>
  );
}

export default App;
