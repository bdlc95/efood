import RestaurantCard from '../../components/Product'
import { List } from './styles'
import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  if (isLoading) return <div className="container"><h3>Carregando...</h3></div>

  return (
    <div className="container">
      <List>
        {restaurantes && restaurantes.map((restaurante) => (
          <RestaurantCard 
            key={restaurante.id}
            id={restaurante.id}
            title={restaurante.titulo} // A API envia 'titulo'
            description={restaurante.descricao} // A API envia 'descricao'
            image={restaurante.capa} // A API envia 'capa'
            infos={[restaurante.tipo]} 
            destaque={restaurante.destacado}
          />
        ))}
      </List>
    </div>
  )
}

export default Home