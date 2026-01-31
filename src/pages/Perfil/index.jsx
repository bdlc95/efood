import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetRestauranteQuery } from '../../services/api'

import Banner from '../../components/Banner'
import ProductCard from '../../components/ProductCard'
import Modal from '../../components/Modal'
import { List } from '../Home/styles'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante, isLoading } = useGetRestauranteQuery(id)
  
  const [modalItem, setModalItem] = useState(null)

  if (isLoading) return <div className="container"><h3>Carregando...</h3></div>

  // ADICIONE ESTA LINHA: Evita erro se a API demorar ou falhar
  if (!restaurante) return null

  return (
    <>
      <Banner 
        image={restaurante.capa} 
        category={restaurante.tipo} 
        title={restaurante.titulo} 
      />
      
      <div className="container">
        <List style={{ gridTemplateColumns: '1fr 1fr 1fr', marginTop: '56px' }}>
{restaurante.cardapio ? restaurante.cardapio.map((prato) => (
  <ProductCard 
    key={prato.id}
    image={prato.foto}
    title={prato.nome} 
    description={prato.descricao} 
    onButtonClick={() => setModalItem(prato)}
  />
)) : <p>Carregando pratos...</p>}
        </List>
      </div>

      <Modal 
        prato={modalItem} 
        aoFechar={() => setModalItem(null)} 
      />
    </>
  )
}

export default Perfil