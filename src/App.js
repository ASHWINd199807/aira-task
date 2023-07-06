import InputVal from "./Input";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import './App.css';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';
import { Navbar } from './components/Nabar';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<InputVal/>}/>
        <Route path="/tab1" element={<Tab1 />}/>
        <Route path="/tab2" element={<Tab2 />}/>
        <Route path="/tab3" element={<Tab3 />}/>
        <Route path="/tab4" element={<Tab4 />}/>
        <Route path="/tab5" element={<Tab5 />}/>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
