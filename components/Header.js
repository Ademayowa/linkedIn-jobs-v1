import {
  Navbar,
  Container,
  Nav,
  Form,
  Control,
  Button,
  FormControl,
} from 'react-bootstrap';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand='md' className='bg-white shadow-sm'>
      <Container>
        <Navbar.Brand>
          <Link href='/'>
            <a>LinkedIn Jobs</a>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav className={styles.link}>
              <Link href='#top'>
                <a>Home</a>
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
