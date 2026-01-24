import Banner from '../../components/Banner'
import ProductCard from '../../components/ProductCard'
import { List } from '../Home/styles'

// 1. Importe a imagem da pizza aqui
import fotoPizza from '../../assets/images/pizza.svg' 
import fotoBanner from '../../assets/images/la-dolce-banner.svg'

const Perfil = () => (
  <>
    <Banner 
      image={fotoBanner} 
      category="Italiana" 
      title="La Dolce Vita Trattoria" 
    />
    <div className="container">
      <List style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
        {/* 2. Passe a variável fotoPizza para a prop image */}
        <ProductCard 
          image={fotoPizza}
          title="Pizza Marguerita" 
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite." 
        />
        <ProductCard image={fotoPizza} title="Pizza Marguerita" description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite." />
        <ProductCard image={fotoPizza} title="Pizza Marguerita" description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite." />
        <ProductCard image={fotoPizza} title="Pizza Marguerita" description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite." />
        <ProductCard image={fotoPizza} title="Pizza Marguerita" description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite." />
        <ProductCard image={fotoPizza} title="Pizza Marguerita" description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite." />
      </List>
    </div>
  </>
)

export default Perfil