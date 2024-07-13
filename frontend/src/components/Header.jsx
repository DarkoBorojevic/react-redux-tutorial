import { 
    Navbar, 
    Nav, 
    Container, 
    NavbarBrand, 
    NavbarToggle, 
    NavbarCollapse, 
    NavLink 
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <Navbar bg='success' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <NavbarBrand>
                        React - Redux example App
                    </NavbarBrand>
                </LinkContainer>
                <NavbarToggle aria-controls='basic-navbar-nav' />
                <NavbarCollapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <LinkContainer to='/'>
                            <NavLink>
                                <FaUser /> Sign In
                            </NavLink>
                        </LinkContainer>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header;