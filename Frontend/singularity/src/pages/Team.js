import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Team() {
  return (
    <Row xs={1} md={1} className="g-4">
      
        <Col>
          <Card className='cards'>
            <Card.Img className='profile' variant="top" src="logo11.png" />
            <Card.Body>
              <Card.Title>Aksh Bhati</Card.Title>
              <Card.Text>
                Data Engineer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='cards'>
            <Card.Img className='profile' variant="top" src="logo11.png" />
            <Card.Body>
              <Card.Title>Kartikey Dwivedi</Card.Title>
              <Card.Text>
                Software Engineer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='cards'>
            <Card.Img className='profile' variant="top" src="logo11.png" />
            <Card.Body>
              <Card.Title>Madhav Vijay</Card.Title>
              <Card.Text>
               Software Engineer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
  );
}

export default Team;