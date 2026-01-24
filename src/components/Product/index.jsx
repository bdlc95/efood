import { Card, Titulo, Descricao, BotaoLink, Tag, TagsContainer } from './styles'

// Adicionamos 'infos' (lista de tags) e 'destaque' (booleano)
const RestaurantCard = ({ title, description, image, infos, destaque }) => (
  <Card>
    <img src={image} alt={title} />
    
    <TagsContainer>
      {destaque && <Tag>Destaque da semana</Tag>}
      {infos.map(info => <Tag key={info}>{info}</Tag>)}
    </TagsContainer>

    <div style={{ padding: '8px', border: '1px solid #E66767', borderTop: 'none' }}> 
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Titulo>{title}</Titulo>
        <span style={{ fontWeight: 'bold', color: '#E66767' }}>4.5 ⭐</span>
      </div>
      <Descricao>{description}</Descricao>
      <BotaoLink to="/perfil">Saiba mais</BotaoLink>
    </div>
  </Card>
)

export default RestaurantCard