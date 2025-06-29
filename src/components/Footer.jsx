import './Footer.scss';

// Icons
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div>
        <a href='https://www.linkedin.com/in/michaelastenclova' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin size={24} className='footer_icon' />
        </a>
        <a href='https://github.com/Majchala' target='_blank' rel='noopener noreferrer'>
          <FaGithub size={24} className='footer_icon' />
        </a>
      </div>

      <div>
        <p><FaRegCopyright size={16} />2025 Michaela Štenclová</p>
      </div>
    </footer>
  )
}

export default Footer