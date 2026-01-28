import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-image: url(${(props) => props.$backgroundImage});
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;

  .container {
    max-width: 1024px;
    width: 100%;
    display: flex;
    align-items: center;
    /* MUDANÇA CRUCIAL: 'center' funciona tanto para Home (só logo) 
       quanto para Perfil (laterais empurram o logo pro centro) */
    justify-content: center; 
  }
`

export const LinkRestaurantes = styled.a`
  color: #E66767;
  font-weight: bold;
  text-decoration: none;
  font-size: 18px;
  /* MUDANÇA: Ocupa todo o espaço disponível na esquerda */
  flex: 1; 
`

export const CarrinhoTexto = styled.span`
  color: #E66767;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  /* MUDANÇA: Ocupa todo o espaço disponível na direita */
  flex: 1; 
  text-align: right; 
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