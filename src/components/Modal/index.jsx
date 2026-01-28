import * as S from './styles'

const Modal = ({ prato, aoFechar }) => {
  // Se não tiver prato selecionado, a modal não aparece
  if (!prato) return null

  return (
    <S.ModalContainer>
      <div className="overlay" onClick={aoFechar}></div>
      <S.ModalContent className="container">
        <img src={prato.foto} alt={prato.nome} />
        <div>
          <header>
            <h4>{prato.nome}</h4>
            <button onClick={aoFechar}>X</button>
          </header>
          <p>{prato.descricao}</p>
          <p>Serve: de {prato.porcao}</p>
          <button>
            Adicionar ao carrinho - R$ {prato.preco.toFixed(2).replace('.', ',')}
          </button>
        </div>
      </S.ModalContent>
    </S.ModalContainer>
  )
}

export default Modal