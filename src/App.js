// import logo from './logo.svg';
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import People from "./components/People"
import Person from "./components/Person"
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/people/:id" element={<Person />}/>
    </Routes>
  );
}

export default App;
