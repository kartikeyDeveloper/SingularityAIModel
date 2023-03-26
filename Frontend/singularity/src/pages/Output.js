import React from 'react'

const Output = () => {
    return (
        <div class="row" style="margin-bottom: 477px;">
            <div class="col-md-3"></div>
            <div class="col-md-6">

                <div class="card card-body alert alert-danger"><center>Sorry! Please consult DOCTOR.</center></div>

                <div class="card card-body alert alert-success"><center>Great! You are HEALTHY.</center></div>

                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4"><a href="{{ url_for('home') }}" class="btn btn-block btn-primary">Back to Home</a></div>
                    <div class="col-md-4"></div>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    )
}

export default Output