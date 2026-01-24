import * as S from './styles' // Importa todos os estilos como 'S'

const Banner = ({ title, category, image }) => (
  <S.Imagem style={{ backgroundImage: `url(${image})` }}>
    <div className="container">
      <S.Categoria>{category}</S.Categoria>
      <S.Titulo>{title}</S.Titulo>
    </div>
  </S.Imagem>
)

export default Banner