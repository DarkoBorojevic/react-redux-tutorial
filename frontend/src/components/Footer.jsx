import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{minHeight:'160px',bottom:'0',width:'100%'}}>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                  <p>TipoIT &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer;