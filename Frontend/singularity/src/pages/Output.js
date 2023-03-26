import React from 'react'
import { useLocation } from 'react-router'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
const Output = (props) => {
    const location=useLocation();
    const data=location.state;
    console.log(data)
    return (
        <div className="container-fluid " style={ { backgroundColor: 'black', height: '100vh' } } >
        <div class="row p-5" style={{marginBottom: '477px'}}>
            <div class="col-md-3"></div>
            <div class="col-md-6">

                <div class="card card-body alert alert-danger"><center>Sorry! Please consult DOCTOR.</center></div>

                <div class="card card-body alert alert-success"><center>Great! You are HEALTHY.</center></div>

                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4"><Link to="/"><a  class="btn btn-block btn-primary">Back to Home</a></Link></div>
                    <div class="col-md-4"></div>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
        </div>
    )
}

export default Output