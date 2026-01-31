import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'

// 1. Verifique se é .svg ou .png na sua pasta assets!
import fechar from '../../assets/images/fechar.svg' 
import * as S from './styles'

const Modal = ({ prato, aoFechar }) => {
  const dispatch = useDispatch()

  if (!prato) return null

  const addToCart = () => {
    // 2. Garante que o prato existe antes de disparar a ação
    dispatch(add(prato))
    aoFechar()
  }

  return (
    <S.ModalContainer>
      <div className="overlay" onClick={aoFechar}></div>
      <S.ModalContent className="container">
        <img src={prato.foto} alt={prato.nome} />
        <div>
          <h4>{prato.nome}</h4>
          <p>{prato.descricao}</p>
          <p>Porção: {prato.porcao}</p>
          
          <S.Botao onClick={addToCart}>
            {/* 3. Adicionado o ?. para evitar tela branca se o preço falhar */}
            Adicionar ao carrinho - R$ {prato.preco?.toFixed(2)}
          </S.Botao>
        </div>
        <img 
          src={fechar} 
          alt="Ícone de fechar" 
          className="close" 
          onClick={aoFechar} 
        />
      </S.ModalContent>
    </S.ModalContainer>
  )
}

export default Modal