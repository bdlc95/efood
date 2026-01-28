import * as S from './styles'

// Note que usamos '$image' com o cifrão para indicar que é uma prop apenas de estilo
const Banner = ({ title, category, image }) => (
  <S.Imagem $image={image}>
    <div className="container">
      <S.Categoria>{category}</S.Categoria>
      <S.Titulo>{title}</S.Titulo>
    </div>
  </S.Imagem>
)

export default Banner