import RestaurantCard from '../../components/Product'
import { List } from './styles'

// Importação das imagens
import fotoLaDolce from '../../assets/images/la-dolce.svg'
import fotoHioki from '../../assets/images/hioki.svg'

const Home = () => (
  <div className="container">
    <List>
      {/* Produto 1 - COM DESTAQUE */}
      <RestaurantCard 
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image={fotoLaDolce}
        destaque={true}
        infos={['Italiana']}
      />

      {/* Produto 2 */}
      <RestaurantCard 
        title="Hioki Sushi"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
        image={fotoHioki}
        destaque={false}
        infos={['Japonesa']}
      />

      {/* Produto 3 */}
      <RestaurantCard 
        title="La Dolce Vita Trattoria" 
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar." 
        image={fotoLaDolce} 
        infos={['Italiana']}
      />

      {/* Produto 4 */}
      <RestaurantCard 
        title="Hioki Sushi" 
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis." 
        image={fotoHioki} 
        infos={['Japonesa']}
      />

      {/* Produto 5 */}
      <RestaurantCard 
        title="La Dolce Vita Trattoria" 
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis." 
        image={fotoLaDolce} 
        infos={['Italiana']}
      />

      {/* Produto 6 */}
      <RestaurantCard 
        title="Hioki Sushi" 
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis." 
        image={fotoHioki} 
        infos={['Japonesa']}
      />
    </List>
  </div>
)

export default Home