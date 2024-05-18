import { Col, Row } from 'react-bootstrap';
import Product from '../component/Product.jsx';
import Loader from '../component/Loader.jsx';
import { useGetProductsQuery } from '../slices/ProductAPIslice.js';

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div> {error?.data?.message || error.error} </div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products?.data.map((product) => (
              <Col key={product._id} lg={4} sm={12} md={6} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>{' '}
        </>
      )}
    </>
  );
};

export default HomeScreen;
