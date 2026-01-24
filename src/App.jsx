import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';
import GlobalStyle from './styles/GlobalStyle';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* O Header e o Footer DEVEM estar aqui dentro */}
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;