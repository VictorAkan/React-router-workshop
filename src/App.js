// import logo from './logo.svg';
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import People from "./components/People"
import Person from "./components/Person"
import Things from "./components/Things"
import ThingsHome from "./components/Things-Home"
import ThingsStarShips from "./components/Things-Starships"
import ThingsVehicle from "./components/Things-Vehicle"
import StarShipDetail from "./components/StarshipDetail"
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/person" element={<Person />}/>
      <Route path="/things" element={<Things />}>
        <Route index element={<ThingsHome />} />
        <Route path="/things/starShips" element={<ThingsStarShips />} />
        <Route path="/things/starShip/:id" element={<StarShipDetail />} />
        <Route path="/things/vehicle" element={<ThingsVehicle />} />
      </Route>
    </Routes>
  );
}

export default App;
