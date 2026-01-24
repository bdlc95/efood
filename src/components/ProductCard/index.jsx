import * as S from './styles'

const ProductCard = ({ image, title, description }) => (
  <S.Card>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <S.BotaoAdicionar>Adicionar ao carrinho</S.BotaoAdicionar>
  </S.Card>
)

export default ProductCard