import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
// import HomeView from './views/HomeView.jsx';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <main className='py-3'>
          <Container>
            <h1>Redux tutorial</h1>
            <Outlet />
          </Container>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
