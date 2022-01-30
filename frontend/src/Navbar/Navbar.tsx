import { Container, Nav, Navbar as BooststrapNavbar, NavDropdown } from 'react-bootstrap';

export const Navbar= (): JSX.Element => ( 
<BooststrapNavbar bg="light" expand="lg">
  <Container>
    <BooststrapNavbar.Brand href="#home">React-Bootstrap</BooststrapNavbar.Brand>
    <BooststrapNavbar.Toggle aria-controls="basic-navbar-nav" />
    <BooststrapNavbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </BooststrapNavbar.Collapse>
  </Container>
</BooststrapNavbar>
)