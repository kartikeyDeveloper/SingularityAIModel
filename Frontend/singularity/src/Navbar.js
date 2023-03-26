import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from './assests/logo.png'
export default function Navbar() {
  return (
    <nav className="nav" style={ { maxHeight: '200px !important' } }>
      <Link to="/" className="site-title">
        <img src={ logo } style={ { width: '150px', height: "70px" } } />
      </Link>
      <div className="d-flex flex-wrap align-content-center"><h4 className="p-2">Diabetes Predictor</h4></div>
      <CustomLink style={ { backgroundColor: 'rgb(78 78 78)' } } to="/team"><button className="btn btn-primary">About us</button></CustomLink>

    </nav>
  )
}

function CustomLink( { to, children, ...props } ) {
  const resolvedPath = useResolvedPath( to )
  const isActive = useMatch( { path: resolvedPath.pathname, end: true } )

  return (
    <li className={ isActive ? "active" : "" }>
      <Link to={ to } { ...props }>
        { children }
      </Link>
    </li>
  )
}