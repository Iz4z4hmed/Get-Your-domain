import './App.css';
import Home from './component/Home';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Contect from './component/Contect';
function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contect/>} />

            
        </Routes>
      </Router>

    </div>
  );
}

export default App;
