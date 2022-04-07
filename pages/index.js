import { Container, Row, Col } from 'react-bootstrap';
import Layout from '@/components/Layout';
// import Link from 'next/link';
// import Image from 'next/image';

export default function Home() {
  return (
    <Layout title='Jobs | LinkedIn'>
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className='fs-2 text-center mt-4'>
              React bootstrap Boilerplate
            </h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
