import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AppContext } from '../Context/AppContext';

const Header = () => {

    const { searchCity, fetchData } = useContext(AppContext)

    const handleSearch = (e) => {
        searchCity(e.target.value)
    }

    return (
        <Navbar expand="sm" className="bg-body-tertiary" style={{ width: '60%' }}>
            <Container fluid>
                <Navbar.Brand>WeatherApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link></Nav.Link>
                        <Nav.Link></Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={handleSearch}
                        />
                        <Button variant="outline-success" onClick={fetchData}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;