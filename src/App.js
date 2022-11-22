import { Container } from 'react-bootstrap';
import {  Route,
          Routes,
          BrowserRouter } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
          {/* <HomeScreen /> */}
            <Route path='/' component={HomeScreen} />
          </Routes>
        </Container>        
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
