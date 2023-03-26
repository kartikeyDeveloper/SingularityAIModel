import Navbar from "./Navbar"
import Team from "./pages/Team"
import Homecopy from "./pages/Home - Copy"
import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Output from "./pages/Output";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Homecopy /> } />
        <Route path="/team" element={ <Team /> } />
        <Route path="/op" element={ <Output /> } />
      </Routes>
    </>
  )
}

export default App