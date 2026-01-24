import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

import { Container, RedesSociais, TextoRodape } from './styles'

const Footer = () => (
  <Container>
    <img src={logo} alt="eFood" />
    <RedesSociais>
      <img src={instagram} alt="Instagram" />
      <img src={facebook} alt="Facebook" />
      <img src={twitter} alt="Twitter" />
    </RedesSociais>
    <TextoRodape>
      A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
    </TextoRodape>
  </Container>
)

export default Footer