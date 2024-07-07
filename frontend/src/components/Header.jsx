import { 
    Navbar, 
    Nav, 
    Container, 
    NavbarBrand, 
    NavbarToggle, 
    NavbarCollapse, 
    NavLink 
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <Navbar bg='success' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <NavbarBrand href='/'>
                    Redux tutorial
                </NavbarBrand>
                <NavbarToggle aria-controls='basic-navbar-nav' />
                <NavbarCollapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <NavLink as={Link} to='/cart'>
                            <FaShoppingCart /> Cart
                        </NavLink>
                        <NavLink as={Link} to='/login'>
                            <FaUser /> Sign In
                        </NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header;