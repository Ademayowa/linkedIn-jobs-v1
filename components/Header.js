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
import HeaderLinks from './HeaderLinks';
import { BsFillHandbagFill, BsFillPeopleFill } from 'react-icons/bs';
import { IoHomeOutline } from 'react-icons/io5';
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

            {/* Add icons later */}
            <Form className={styles.navForm}>
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
            </Form>

            <div className='me-3'>
              <Button className={styles.searchBtn} variant='outline-primary'>
                Search
              </Button>
            </div>
          </Nav>

          <div className='d-flex'>
            <HeaderLinks Icon={IoHomeOutline} text='Home' />
            <HeaderLinks Icon={BsFillPeopleFill} text='My Network' />
            <HeaderLinks Icon={BsFillHandbagFill} text='Jobs' />

            <div className={styles.headerImg}>
              <Image
                width={30}
                height={30}
                src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                className='img-fluid'
              />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
