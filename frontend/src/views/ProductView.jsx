// import { useEffect, useState } from 'react';
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
import { useGetSingleProductQuery } from '../slices/productsApiSlice';
// import axios from 'axios';

const ProductView = () => {
  // const [product, setProduct] = useState({});

  const { id: productId } = useParams();
  
  //useEffect(() => {
  //  const fetchProduct = async () => {
  //    const { data } = await axios.get(`/api/product/${productId}`);
  //    setProduct(data);
  //  };

  //  fetchProduct();
  //}, [productId]);

  // console.log(product);

  const { data: product, isLoading, isError } = useGetSingleProductQuery(productId);

  return (
    <>
      <Link className='btn btn-light my-4' to='/'>
        Go Back
      </Link>
      { isLoading ? (
        <h3>Item loading...</h3>
      ) : isError ? (
        <div>
          { isError?.data?.message || isError.error }
        </div>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={6}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroupItem>
                  <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                  {product.description}
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>
                      Price:
                    </Col>
                    <Col>
                      <strong>$ {product.price}</strong>
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
      ) }
    </>
  )
}

export default ProductView;