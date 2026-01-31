import styled from 'styled-components'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1024;
`

export const Sidebar = styled.aside`
  background-color: #E66767;
  z-index: 1024;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  overflow-y: auto; // Garante scroll se o formulário for grande
`

export const CartItem = styled.li`
  display: flex;
  background-color: #FFEBD9;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;
  list-style: none;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: #E66767;
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: #E66767;
    font-weight: 400;
    font-size: 14px;
  }

  .delete-btn {
    background-image: url('https://raw.githubusercontent.com/bruno-fardin/efood/main/src/assets/images/lixeira.png');
    width: 16px; 
    height: 16px;
    border: none; 
    background-color: transparent;
    position: absolute; 
    bottom: 8px; 
    right: 8px;
    cursor: pointer;
    background-size: cover;
  }
`

// --- ESTES SÃO OS ESTILOS QUE FALTAVAM E CAUSAVAM O ERRO ---

export const BotaoCheckout = styled.button`
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  padding: 4px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  margin-top: 8px;
`

export const FormContainer = styled.div`
  color: #FFEBD9;
  
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  
  /* Classe auxiliar para inputs lado a lado */
  .field-group {
    display: flex;
    column-gap: 34px;
  }
`

export const InputGroup = styled.div`
  margin-bottom: 8px;
  flex: auto; // Importante para o layout flex funcionar

  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  input {
    background-color: #FFEBD9;
    border: 1px solid #FFEBD9;
    height: 32px;
    width: 100%;
    padding: 0 8px;
    color: #4B4B4B;
    font-weight: 700;
    font-size: 14px;
  }
`