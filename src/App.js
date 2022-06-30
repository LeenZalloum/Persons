import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GetPerson from './components/GetPerson';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import AddPerson from './components/AddPerson';

function App() {
  
  return (
    <Router>
       <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/addPerson" element={<AddPerson />}/>
            <Route path="/getPerson/:id" element={<GetPerson />}/>
          </Routes>
      
       </div>
    </Router>
  );
}

export default App;
