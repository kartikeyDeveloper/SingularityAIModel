import Card from 'react-bootstrap/Card';

function Team() {
  return (
    <div className='row text-center text-white' style={ { display: 'flex',width:'90%', alignContent: 'center', justifyContent: 'space-evenly' } } >
     <h2 className='m-5 text-white'>Team Cognition Crew</h2>
      <div className='col-md-4'>
        <Card className='cards m-auto' style={ { maxWidth: '250px',backgroundColor: 'steelblue' } }>
          <Card.Img style={ { maxHeight: '250px' } } className='profile img-fluid' variant="top" src="logo11.png" />
          <Card.Body>
            <Card.Title>Aksh Bhati</Card.Title>
            <Card.Text style={{fontSize:'14px'}}>
            aksh.bhati@nagarro.com
            </Card.Text>
            <p style={ { textAlign: 'left' } }>
             Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. </p>
          </Card.Body>
        </Card>
      </div>
      
      <div className='col-md-4'>
        <Card className='cards m-auto' style={ { maxWidth: '250px',backgroundColor: 'steelblue' } }>
          <Card.Img style={ { maxHeight: '250px' } } className='profile img-fluid' variant="top" src="logo11.png" />
          <Card.Body>
            <Card.Title>Madhav Vijay</Card.Title>
            <Card.Text style={{fontSize:'14px'}}>
            madhav.vijay@nagarro.com
            </Card.Text>
            <p style={ { textAlign: 'left' } }>
             Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. </p>
          </Card.Body>
        </Card>
      </div>
      
      <div className='col-md-4'>
        <Card className='cards m-auto' style={ { maxWidth: '250px',backgroundColor: 'steelblue' } }>
          <Card.Img style={ { maxHeight: '250px' } } className='profile img-fluid' variant="top" src="logo11.png" />
          <Card.Body>
            <Card.Title>Kartikey Dwivedi</Card.Title>
            <p style={{fontSize:'14px'}}>
            kartikey.dwivedi@nagarro.com
            </p>
            <p style={ { textAlign: 'left' } }>
             Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. </p>
          </Card.Body>
        </Card>
      </div>
      
    </div>
  );
}

export default Team;