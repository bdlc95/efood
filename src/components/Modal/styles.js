import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1024;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const ModalContent = styled.div`
  background-color: #E66767;
  padding: 32px;
  position: relative;
  z-index: 1025;
  display: flex;
  color: #fff;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
    
    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 24px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  .close {
    width: 16px;
    height: 16px;
    background-color: transparent; 
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Botao = styled.button`
  padding: 4px 6px;
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  width: max-content;
`