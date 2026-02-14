import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { close, remove, clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import * as S from './styles'

// 1. IMPORTAR O ÍCONE (Verifique se o caminho e nome do arquivo estão corretos)
import lixeira from '../../assets/images/lixeira.svg'

const Cart = () => {
  const { isOpen, items } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  
  const [step, setStep] = useState(0)
  const [purchase, { isLoading, isSuccess, data }] = usePurchaseMutation()

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + (item.preco || 0), 0)
  }

  const formik = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().when((_, schema) => step === 1 ? schema.required('Campo obrigatório') : schema),
      address: Yup.string().when((_, schema) => step === 1 ? schema.required('Campo obrigatório') : schema),
      city: Yup.string().when((_, schema) => step === 1 ? schema.required('Campo obrigatório') : schema),
      zipCode: Yup.string().when((_, schema) => step === 1 ? schema.min(9, 'CEP inválido').required('Campo obrigatório') : schema),
      number: Yup.string().when((_, schema) => step === 1 ? schema.required('Campo obrigatório') : schema),
      cardName: Yup.string().when((_, schema) => step === 2 ? schema.required('Campo obrigatório') : schema),
      cardNumber: Yup.string().when((_, schema) => step === 2 ? schema.required('Campo obrigatório') : schema),
      cardCode: Yup.string().when((_, schema) => step === 2 ? schema.min(3).required('Campo obrigatório') : schema),
      expiresMonth: Yup.string().when((_, schema) => step === 2 ? schema.required('Campo obrigatório') : schema),
      expiresYear: Yup.string().when((_, schema) => step === 2 ? schema.required('Campo obrigatório') : schema)
    }),
    onSubmit: (values) => {
      if (step === 1) {
        setStep(2)
      } else if (step === 2) {
        purchase({
          products: items.map(item => ({ id: item.id, price: item.preco })),
          delivery: {
            receiver: values.receiver,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.zipCode,
              number: Number(values.number),
              complement: values.complement
            }
          },
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              }
            }
          }
        })
      }
    }
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
      setTimeout(() => {
        setStep(3)
      }, 0)
    }
  }, [isSuccess, dispatch])

  const handleCloseCart = () => {
    dispatch(close())
    setStep(0)
    formik.resetForm()
  }

  if (!isOpen) return null

  return (
    <S.CartContainer>
      <S.Overlay onClick={handleCloseCart} />
      <S.Sidebar>
        
        {step === 0 && (
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
                      {/* 2. ALTERAÇÃO AQUI: Botão agora contém a imagem da lixeira */}
                      <button 
                        className="delete-btn" 
                        type="button"
                        onClick={() => dispatch(remove(item.id))} 
                      >
                        <img src={lixeira} alt="Remover item" />
                      </button>
                    </S.CartItem>
                  ))}
                </ul>
                <div style={{ marginTop: '40px', color: '#FFEBD9' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                    <span>Valor total</span>
                    <span>R$ {getTotalPrice().toFixed(2)}</span>
                  </div>
                  <S.BotaoCheckout onClick={() => setStep(1)}>
                    Continuar com a entrega
                  </S.BotaoCheckout>
                </div>
              </>
            ) : (
              <p style={{ color: '#FFEBD9', textAlign: 'center' }}>O carrinho está vazio.</p>
            )}
          </>
        )}

        {(step === 1 || step === 2) && (
          <S.FormContainer>
            <form onSubmit={formik.handleSubmit}>
              {step === 1 ? (
                <>
                  <h3>Entrega</h3>
                  <S.InputGroup>
                    <label htmlFor="receiver">Quem irá receber</label>
                    <input id="receiver" name="receiver" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.receiver} className={formik.touched.receiver && formik.errors.receiver ? 'error' : ''} />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <input id="address" name="address" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} className={formik.touched.address && formik.errors.address ? 'error' : ''} />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input id="city" name="city" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} className={formik.touched.city && formik.errors.city ? 'error' : ''} />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="zipCode">CEP</label>
                      <input id="zipCode" name="zipCode" type="text" maxLength="9" placeholder="00000-000" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.zipCode} className={formik.touched.zipCode && formik.errors.zipCode ? 'error' : ''} />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="number">Número</label>
                      <input id="number" name="number" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.number} className={formik.touched.number && formik.errors.number ? 'error' : ''} />
                    </S.InputGroup>
                  </S.Row>
                  <S.InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input id="complement" name="complement" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.complement} />
                  </S.InputGroup>
                  <S.BotaoCheckout type="submit">Continuar com o pagamento</S.BotaoCheckout>
                  <S.BotaoCheckout type="button" onClick={() => setStep(0)}>Voltar para o carrinho</S.BotaoCheckout>
                </>
              ) : (
                <>
                  <h3>Pagamento - Valor a pagar R$ {getTotalPrice().toFixed(2)}</h3>
                  <S.InputGroup>
                    <label htmlFor="cardName">Nome no cartão</label>
                    <input id="cardName" name="cardName" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cardName} className={formik.touched.cardName && formik.errors.cardName ? 'error' : ''} />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup maxWidth="228px">
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input id="cardNumber" name="cardNumber" type="text" maxLength="19" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cardNumber} className={formik.touched.cardNumber && formik.errors.cardNumber ? 'error' : ''} />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="87px">
                      <label htmlFor="cardCode">CVV</label>
                      <input id="cardCode" name="cardCode" type="text" maxLength="3" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cardCode} className={formik.touched.cardCode && formik.errors.cardCode ? 'error' : ''} />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <input id="expiresMonth" name="expiresMonth" type="text" maxLength="2" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.expiresMonth} className={formik.touched.expiresMonth && formik.errors.expiresMonth ? 'error' : ''} />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <input id="expiresYear" name="expiresYear" type="text" maxLength="4" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.expiresYear} className={formik.touched.expiresYear && formik.errors.expiresYear ? 'error' : ''} />
                    </S.InputGroup>
                  </S.Row>
                  <S.BotaoCheckout type="submit" disabled={isLoading}>{isLoading ? 'Finalizando...' : 'Finalizar pagamento'}</S.BotaoCheckout>
                  <S.BotaoCheckout type="button" onClick={() => setStep(1)}>Voltar para entrega</S.BotaoCheckout>
                </>
              )}
            </form>
          </S.FormContainer>
        )}

        {step === 3 && data && (
          <S.FormContainer>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p className="margin-bottom">Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
            <p className="margin-bottom">Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. </p>
            <p className="margin-bottom">Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar.</p>
            <S.BotaoCheckout onClick={handleCloseCart}>Concluir</S.BotaoCheckout>
          </S.FormContainer>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart