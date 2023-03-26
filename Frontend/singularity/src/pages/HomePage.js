import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
const Home = () => {
//  const url = process.env.REACT_APP_URL
  const url = 'http://127.0.0.1:8000/predict'
const navigate = useNavigate()
const [form, setForm] = useState(
  {
    pregnancy: 1,
    glucose: 50,
    bp: 34,
    skin_thickness: 45,
    insulin: 4545,
    bmi: 657.34,
    pedigree: 17.2,
    age: 46
  }
)
const onChangeHandler = ( e ) => {
  setForm( { ...form, [e.target.name]: e.target.value } );
  console.log( form )
}
const submit = async ( e ) => {
  try {
    e.preventDefault();
    console.log( `${ url }` );
    // console.log( blog );
    const response=await axios.post( `${ url }`, form )
    // // const response={data:1}
    console.log("response",response);
    //  const response={data:{result:1}};
    navigate( "/op" ,{state:response.data.result})
  } catch ( error ) {
    console.log( error );
  }
}
  return (
    <div className="container-fluid " style={ { backgroundColor: 'black', height: '100%' } } >
      <div className='row p-2'>
        <div className='col-md-8  m-auto '>
          <div className="bg-warning p-2 shadow-lg p-3 mt-4 mb-5 bg-white rounded">
            <div className='pb-4 text-center'>
              <h2 className="card-title">Fill this form to Predict </h2>
            </div>
            <form onSubmit={ e => submit( e ) }>
              <div className="form-group mb-4 mt-2">
                <label >Gender </label>
                <input onChange={ e => onChangeHandler( e ) } style={ { border: "1px solid black" } } className="form-control" type="text" name="pregnancies" placeholder="Number of Pregnancies eg. 0" />
              </div>
              <div className="form-group mb-4 mt-2">
                <label >Glucose</label>
                <input onChange={ e => onChangeHandler( e ) } style={ { border: "1px solid black" } } className="form-control" type="text" name="glucose" placeholder="Glucose (mg/dL) eg. 80" />
              </div>
              <div className="form-group mb-4 mt-2">
                <label >bloodpressure</label>
                <input onChange={ e => onChangeHandler( e ) } style={ { border: "1px solid black" } } className="form-control" type="text" name="bloodpressure" placeholder="Blood Pressure (mmHg) eg. 80" />
              </div>
              <div className="form-group mb-4 mt-2">
                <label>  skinthickness</label>
                <input onChange={ e => onChangeHandler( e ) } style={ { border: "1px solid black" } } className="form-control" type="text" name="skinthickness" placeholder="Skin Thickness (mm) eg. 20" />
              </div>
              <div className="form-group mb-4 mt-2">
                <label >insulin</label>
                <input onChange={ e => onChangeHandler( e ) } style={ { border: "1px solid black" } } className="form-control" type="text" name="insulin" placeholder="Insulin Level (IU/mL) eg. 80" />
              </div>
              <div className="form-group mb-4 mt-2">
                <label >Body Mass Index</label>
                <input onChange={ e => onChangeHandler( e ) } style={ { border: "1px solid black" } } className="form-control" type="text" name="bmi" placeholder="Body Mass Index (kg/m²) eg. 23.1" />
              </div>
              <div className="form-group mb-4 mt-2">
                <label >Diabetes Pedigree Function Value</label>
                <input onChange={ e => onChangeHandler( e ) } style={ { border: "1px solid black" } } className="form-control" type="text" name="dpf" placeholder="Diabetes Pedigree Function eg. 0.52" />
              </div>
              <div className="form-group mb-4 mt-2">
                <label >Age</label>
                <input onChange={ e => onChangeHandler( e ) } style={ { border: "1px solid black" } } className="form-control" type="text" name="age" placeholder="Age (years) eg. 34" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="reset" style={ { marginLeft: '10px' } } className="btn btn-danger">Clear</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home