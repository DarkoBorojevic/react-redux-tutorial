import { 
    Card, 
    CardBody, 
    CardImg, 
    CardText, 
    CardTitle 
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
            <CardImg src={product.image} variant="top" />
        </Link>
        <CardBody>
            <Link to={`/product/${product._id}`}>
                <CardTitle as='div' className='product-title'>
                    <strong>{product.name}</strong>
                </CardTitle>
            </Link>
            <CardText as='div'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Voluptas corporis distinctio provident nam, quam deserunt 
                exercitationem ex ducimus ad natus porro aliquam sit voluptates 
                illo obcaecati a rerum nesciunt voluptatibus.
            </CardText>
            <CardText as='h3'>
                &dollar; {product.price}
            </CardText>
        </CardBody>
    </Card>
  )
}

export default Product;