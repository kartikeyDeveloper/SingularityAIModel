import Navbar from "./Navbar"
import Team from "./pages/Team"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid " style={ {backgroundColor:'black',  display: 'flex',height:'100vh',alignContent:'center', justifyContent: 'center' } } >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </>
  )
}

export default App