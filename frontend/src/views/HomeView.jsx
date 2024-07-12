// import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
// import axios from 'axios';
import { useGetAllProductsQuery } from '../slices/productsApiSlice';

const HomeView = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get('/api/products');
  //     setProducts(data);
  //   };

  //   fetchProducts();
  // }, []);

  const { data: products, isLoading, isError } = useGetAllProductsQuery();

  return (
    <>
      { isLoading ? (
        <h3>Items loading...</h3>
      ) : isError ? (
        <div>
          { isError?.data?.message || isError.error }
        </div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            { products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            )) }
          </Row>
        </>
      ) }
    </>
  )
}

export default HomeView