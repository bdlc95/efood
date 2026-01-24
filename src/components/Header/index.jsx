import { useLocation, Link } from 'react-router-dom'
import { HeaderContainer, TituloHome, LinkRestaurantes, CarrinhoTexto } from './styles'

import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.png'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <HeaderContainer backgroundImage={fundo}>
      <div className="container">
        {!isHome && (
          <LinkRestaurantes as={Link} to="/">
            Restaurantes
          </LinkRestaurantes>
        )}
        
        <Link to="/">
          <img src={logo} alt="eFood" />
        </Link>

        {!isHome && (
          <CarrinhoTexto>
            0 produto(s) no carrinho
          </CarrinhoTexto>
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