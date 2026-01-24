import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #E66767;
  position: relative;
  margin-top: 48px;
  color: #E66767;
  
  img {
    display: block;
    width: 100%;
    max-height: 217px;
    object-fit: cover;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin: 8px 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
  padding: 0 8px;
`
export const BotaoLink = styled(Link)`
  background-color: #E66767;
  color: #FFEBD9;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  display: inline-block;
`
export const Tag = styled.div`
  background-color: #E66767;
  color: #FFEBD9;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
  margin-left: 8px;
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`