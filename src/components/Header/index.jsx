import { useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'

import { HeaderContainer, TituloHome, LinkRestaurantes, CarrinhoTexto } from './styles'
import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.png'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  
  const dispatch = useDispatch()
  // Seleciona os itens do estado global para atualizar o contador automaticamente
  const { items } = useSelector((state) => state.cart)

  return (
    <HeaderContainer $backgroundImage={fundo}>
      <div className="container">
        {!isHome ? (
          <>
            <LinkRestaurantes as={Link} to="/">Restaurantes</LinkRestaurantes>
            <Link to="/" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <img src={logo} alt="eFood" />
            </Link>
            {/* O onClick agora chama o dispatch(open()) diretamente para garantir a abertura */}
            <CarrinhoTexto onClick={() => dispatch(open())} style={{ cursor: 'pointer' }}>
              {items.length} produto(s) no carrinho
            </CarrinhoTexto>
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