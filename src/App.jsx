import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store';
import Cart from './components/Cart';
import Rotas from './routes';
import GlobalStyle from './styles/GlobalStyle';
import Footer from './components/Footer';
import Header from './components/Header';
// Removi o Header daqui se ele já estiver sendo chamado dentro de cada página nas Rotas

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Rotas />
        <Cart /> {/* O Cart fica aqui para sobrepor todo o conteúdo */}
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;