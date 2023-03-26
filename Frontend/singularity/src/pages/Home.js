import React from 'react'
const onChangeHandler = ( e ) => {

  console.log( e )
}
const submit = ( e ) => {

  console.log( e )
}

const Home = () => {
  return (
    <div className="container-fluid " style={ { backgroundColor: 'black', height: '100%' } } >
      <div className='row p-2'>
        <div className='col-md-8  m-auto '>
          <div className="bg-warning p-2 shadow-lg p-3 mt-4 mb-5 bg-white rounded">
            <div className='pb-4 text-center'>
              <h2 className="card-title">Fill this form to Predict </h2>
            </div>
            <form>
              <div class="form-group mb-1 row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Age</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="Age" />
                </div>
              </div>
              <div class="form-group mb-1 row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">skinthickness</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="skinthickness" />
                </div>
              </div>
              <div class="form-group mb-1 row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">skinthickness</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="skinthickness" />
                </div>
              </div>
              <div class="form-group mb-1 row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">skinthickness</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="skinthickness" />
                </div>
              </div>
              <div class="form-group mb-1 row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">skinthickness</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="skinthickness" />
                </div>
              </div>
             
             
              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                      <label class="form-check-label" for="gridRadios1">
                        Male
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                      <label class="form-check-label" for="gridRadios2">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div class="form-group row">
                <div class="col-sm-2">Checkbox</div>
                <div class="col-sm-10">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">
                      Example checkbox
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-10">
                  <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home