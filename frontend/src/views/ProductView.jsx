import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { 
  Row, 
  Col, 
  Image, 
  ListGroup, 
  Card,
  ListGroupItem
} from 'react-bootstrap';
import axios from 'axios';

const ProductView = () => {
  const [product, setProduct] = useState({});

  const { id: productId } = useParams();
  
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/product/${productId}`);
      setProduct(data);
    };

    fetchProduct();
  }, [productId]);

  // console.log(product);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={4}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <strong>Price: &dollar; {product.price}</strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                {product.description}
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>&dollar; {product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    <strong>{product.countInStock > 0 ? 'In Stock.' : 'Out of Stock.'}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductView;