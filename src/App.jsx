import { Provider } from 'react-redux'; // 1. Importar o Provider
import { BrowserRouter } from 'react-router-dom';

import { store } from './store'; // 2. Importar o seu Store (o arquivo index.js da pasta store)
import Rotas from './routes';
import GlobalStyle from './styles/GlobalStyle';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}> {/* 3. Envolver tudo com o Provider */}
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;