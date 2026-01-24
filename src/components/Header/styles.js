import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-image: url(${(props) => props.backgroundImage});
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    max-width: 1024px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 
  }
`

export const LinkRestaurantes = styled.a`
  color: #E66767;
  font-weight: bold;
  text-decoration: none;
  font-size: 18px;
  width: 250px; // Adicionado: Garante espaço fixo na esquerda
`

export const CarrinhoTexto = styled.span`
  color: #E66767;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  width: 250px; // Adicionado: Garante espaço fixo na direita
  text-align: right; // Alinha o texto do carrinho no final da direita
`

export const TituloHome = styled.h1`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: #E66767;
  text-align: center;
  max-width: 540px;
  margin-top: 138px;
`