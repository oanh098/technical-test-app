import './App.css';
import About from './about';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import FetchData from './fetchData';
import editData from './editData';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/about" Component={About}/>
        <Route exact path="/fetchData" Component={FetchData}/>
        <Route exact path="/editAnime/:id" Component={editData}/>
      </Routes>
    </Router>
    
  </>
  );
}

export default App;
