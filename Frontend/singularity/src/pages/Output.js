import React from 'react'
import { useLocation } from 'react-router'

const Output = () => {
    const location=useLocation();
    const data=location.state.data;
    return (
        <div className="container-fluid " style={ { backgroundColor: 'black', height: '100%' } } >
        <div class="row" style="margin-bottom: 477px;">
            <div class="col-md-3"></div>
            <div class="col-md-6">

                <div class="card card-body alert alert-danger"><center>{data}Sorry! Please consult DOCTOR.</center></div>

                <div class="card card-body alert alert-success"><center>Great! You are HEALTHY.</center></div>

                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4"><a href="{{ url_for('home') }}" class="btn btn-block btn-primary">Back to Home</a></div>
                    <div class="col-md-4"></div>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
        </div>
    )
}

export default Output