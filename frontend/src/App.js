import { Container } from 'react-bootstrap';
import Header from './component/Header';
import Footer from './component/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
