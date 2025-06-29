import { Link } from 'react-scroll';
import './Hero.scss';

// Icons
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero_titles'>
        <h2>
          Hello
        </h2>
        <h1>
          I'm <span>Michaela</span>
        </h1>
        <h2>
          Frontend dev
        </h2>
      </div>

      <div className='hero_contact'>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <button>Let's connect</button>
        </Link>        
        <div>
          <a href='https://www.linkedin.com/in/michaelastenclova' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={24} className='hero_icon' />
          </a>
          <a href='https://github.com/Majchala' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={24} className='hero_icon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero