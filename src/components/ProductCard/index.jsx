import * as S from './styles'

// Adicionamos a prop onButtonClick para lidar com a abertura da modal
const ProductCard = ({ image, title, description, onButtonClick }) => (
  <S.Card>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    {/* O botão agora dispara a função que virá do componente pai (Perfil) */}
    <S.BotaoAdicionar onClick={onButtonClick}>
      Adicionar ao carrinho
    </S.BotaoAdicionar>
  </S.Card>
)

export default ProductCard