import Card from 'react-bootstrap/Card';
import crew from '../data/crew';
function Team() {
  return (
    <div className="container-fluid " style={ { backgroundColor: 'black', height: '100%' } } >

      <div className='row text-center text-white' style={ { width: '100%' } } >
        <div className='col-md-12'>
          <h2 className='m-5 text-white'>Team Cognition Crew</h2>
        </div>
        <div className='col-md-12 d-flex flex-wrap gap-4 p-4'>
          { crew.map( ( data, index ) => {
            return <Card key={ index } className='cards m-auto' style={ { maxWidth: '250px', backgroundColor: '#420ebd' } }>
              <Card.Img style={ { maxHeight: '250px' } } className='profile img-fluid' variant="top" src="logo11.png" />
              <Card.Body>
                <Card.Title>{ data.title }</Card.Title>
                <Card.Text style={ { fontSize: '14px' } }>
                  { data.email }
                </Card.Text>
                <p style={ { textAlign: 'left' } }>
                  { data.expertise } </p></Card.Body>
            </Card>

          } ) }
        </div>
      </div>
    </div>
  );
}

export default Team;