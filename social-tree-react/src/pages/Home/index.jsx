import { useState } from 'react'
import './styles.css'

// Importando icones
import icoTwitter from '../../assets/img/icones-redes/twitter.png'
import icoTwitch from '../../assets/img/icones-redes/twitch.png'
import icoTInstagram from '../../assets/img/icones-redes/instagram.png'
import icoLinkedin from '../../assets/img/icones-redes/linkedin.png'
import icoGithub from '../../assets/img/icones-redes/github.png'


export function Home() {
  
  return (
    <div className="Home">
      <header>
        <div>
        <img src="https://github.com/geraldoneto771.png" alt="Foto de perfil" />
        <a href="https://www.instagram.com/coalapapelaria_">@instagram</a>
        </div>
      </header>
      
      <main>
        <div id='linksMain'>
          <a href="#">WHATSAPP</a>
          <a href="#">FACEBOOK</a>
          <a href="#">PAPELARIA</a>
          <a href="#">OLX</a>  
        </div>
      </main>

      <footer>
        <div id='redes-sociais'>
          <a href="#"><img src={icoTwitter} alt="Icone Twitter" /></a>
          <a href="#"><img src={icoTwitch} alt="Icone Twitch" /></a>
          <a href="#"><img src={icoTInstagram} alt="Icone Instagram" /></a>
          <a href="#"><img src={icoLinkedin} alt="Icone LinkedIn" /></a>
          <a href="#"><img src={icoGithub} alt="Icone Github" /></a>
        </div>
      </footer>
      
    </div>
  )
}

export default Home
