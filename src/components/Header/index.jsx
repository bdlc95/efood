import { useLocation, Link } from 'react-router-dom'
import { HeaderContainer, TituloHome, LinkRestaurantes, CarrinhoTexto } from './styles'

import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.png'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    // O $backgroundImage é essencial para o styled-components não enviar lixo ao HTML
    <HeaderContainer $backgroundImage={fundo}>
      <div className="container">
        {!isHome ? (
          <>
            <LinkRestaurantes as={Link} to="/">Restaurantes</LinkRestaurantes>
            <Link to="/" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <img src={logo} alt="eFood" />
            </Link>
            <CarrinhoTexto>0 produto(s) no carrinho</CarrinhoTexto>
          </>
        ) : (
          <Link to="/" style={{ margin: '0 auto' }}>
            <img src={logo} alt="eFood" />
          </Link>
        )}
      </div>

      {isHome && (
        <TituloHome>
          Viva experiências gastronômicas no conforto da sua casa
        </TituloHome>
      )}
    </HeaderContainer>
  )
}

export default Header