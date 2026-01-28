import { Card, Titulo, Descricao, BotaoLink, Tag, TagsContainer } from './styles'

// Adicionamos o 'id' nas props para poder criar o link dinâmico
const RestaurantCard = ({ id, title, description, image, infos, destaque }) => (
  <Card>
    <img src={image} alt={title} />
    
    <TagsContainer>
      {destaque && <Tag>Destaque da semana</Tag>}
      {/* Adicionamos uma verificação (infos &&) para não dar erro se não houver tags */}
      {infos && infos.map(info => (
        <Tag key={info}>{info}</Tag>
      ))}
    </TagsContainer>

    <div style={{ padding: '8px', border: '1px solid #E66767', borderTop: 'none', background: '#fff' }}> 
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Titulo>{title}</Titulo>
        <span style={{ fontWeight: 'bold', color: '#E66767' }}>4.5 ⭐</span>
      </div>
      <Descricao>{description}</Descricao>
      {/* O 'to' agora usa o ID real do restaurante vindo da API */}
      <BotaoLink to={`/perfil/${id}`}>Saiba mais</BotaoLink>
    </div>
  </Card>
)

export default RestaurantCard