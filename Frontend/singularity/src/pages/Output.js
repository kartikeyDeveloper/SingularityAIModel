import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
const Output = ( props ) => {
    const location = useLocation();
    const [state, setValueState] = useState( 0 );
    console.log( state );
    useEffect( () => {
        setValueState( location.state )
    }, [] );
    return (
        <div className="container-fluid " style={ { backgroundColor: 'black', height: '100vh' } } >
            <div className="row p-5" style={ { marginBottom: '477px' } }>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    { state != 0 && <div className="card card-body alert alert-danger"><center>Sorry! Please consult DOCTOR.</center></div>
                    }
                    { state == 0 && <div className="card card-body alert alert-success"><center>Great! You are HEALTHY.</center></div>
                    }
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4"><Link to="/"><a className="btn btn-block btn-primary">Back to Home</a></Link></div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default Output