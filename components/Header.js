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
import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand='md' className='bg-white shadow-sm'>
      <Container>
        <Navbar.Brand>
          <Image src='https://rb.gy/dpmd9s' width={55} height={55} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className=''>
            {/* <Nav className={styles.link}>
              <Link href='#top'>
                <a>Home</a>
              </Link>
            </Nav> */}

            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='City, state or zip code'
                className='me-2'
                aria-label='Search'
              />
              <FormControl
                type='search'
                placeholder='Search by state'
                className='me-2'
                aria-label='Search'
              />
              {/* <Button variant='outline-success'>Search</Button> */}
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
