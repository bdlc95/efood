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
    z-index: 5;

    .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    }
`

export const ModalContent = styled.div`
    max-width: 1024px;
    position: relative;
    z-index: 1;
    background-color: #E66767;
    padding: 32px;
    display: flex;
    gap: 24px;
    color: #fff;

    img {
        width: 280px;
        height: 280px;
        object-fit: cover;
    }

    header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    h4 {
        font-size: 18px;
        font-weight: 900;
    }

    button {
        background: none;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
    }
    }

    p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
    }

    button {
    background-color: #FFEBD9;
    color: #E66767;
    border: none;
    padding: 4px 8px;
    font-weight: bold;
    cursor: pointer;
    }
`