import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomeView from './views/HomeView.jsx';

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <main className='py-3'>
          <h1>Redux tutorial</h1>
          <HomeView />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
