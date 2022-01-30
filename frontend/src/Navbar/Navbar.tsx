import { Container, Nav, Navbar as BooststrapNavbar } from 'react-bootstrap';

export const Navbar= (): JSX.Element => ( 
  <Container>
<BooststrapNavbar bg="light" expand="lg">
  <Container>
    <BooststrapNavbar.Brand href="#home">Simple Blog</BooststrapNavbar.Brand>
    <BooststrapNavbar.Toggle aria-controls="basic-navbar-nav" />
    <BooststrapNavbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">New Post</Nav.Link>
      </Nav>
    </BooststrapNavbar.Collapse>
  </Container>
</BooststrapNavbar>
</Container>
)