import { Col, Row } from 'react-bootstrap';
import Product from '../component/Product.jsx';
import Loader from '../component/Loader.jsx';
import Paginate from '../component/Paginate.jsx';
import ProductCarausal from '../component/ProductCarausal.jsx';
import { useGetProductsQuery } from '../slices/ProductAPIslice.js';
import { Link, useParams } from 'react-router-dom';
import Message from '../component/Message.jsx';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {!keyword ? (
        <ProductCarausal />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message> {error?.data?.message || error.error} </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.products?.map((product) => (
              <Col key={product._id} lg={4} sm={12} md={6} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
