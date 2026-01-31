import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [isCheckout, setIsCheckout] = useState(false)

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + (item.preco || 0), 0)
  }

  const handleCloseCart = () => {
    dispatch(close())
    setIsCheckout(false)
  }

  if (!isOpen) return null

  return (
    <S.CartContainer>
      <S.Overlay onClick={handleCloseCart} />
      <S.Sidebar>
        {!isCheckout ? (
          <>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>R$ {item.preco?.toFixed(2)}</span>
                      </div>
                      <button 
                        className="delete-btn" 
                        onClick={() => dispatch(remove(item.id))} 
                      />
                    </S.CartItem>
                  ))}
                </ul>
                <div style={{ marginTop: '40px', color: '#FFEBD9' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                    <span>Valor total</span>
                    <span>R$ {getTotalPrice().toFixed(2)}</span>
                  </div>
                  <S.BotaoCheckout onClick={() => setIsCheckout(true)}>
                    Continuar com a entrega
                  </S.BotaoCheckout>
                </div>
              </>
            ) : (
              <p style={{ color: '#FFEBD9', textAlign: 'center' }}>O carrinho está vazio.</p>
            )}
          </>
        ) : (
          <S.FormContainer>
            <h3>Entrega</h3>
            <form>
              <S.InputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input type="text" id="receiver" name="receiver" required />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="address">Endereço</label>
                <input type="text" id="address" name="address" required />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input type="text" id="city" name="city" required />
              </S.InputGroup>
              <div className="field-group" style={{ display: 'flex', gap: '34px' }}>
                <S.InputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <input type="text" id="zipCode" name="zipCode" required />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="number">Número</label>
                  <input type="text" id="number" name="number" required />
                </S.InputGroup>
              </div>
              <S.InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input type="text" id="complement" name="complement" />
              </S.InputGroup>
              <S.BotaoCheckout type="button" style={{ marginTop: '16px' }}>
                Continuar com o pagamento
              </S.BotaoCheckout>
              <S.BotaoCheckout type="button" onClick={() => setIsCheckout(false)}>
                Voltar para o carrinho
              </S.BotaoCheckout>
            </form>
          </S.FormContainer>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart