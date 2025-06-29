import { Link } from 'react-scroll';
import { useState } from 'react';
import './Navbar.scss';

// Icons
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuToggle = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <nav>
      <button className='menu_icon' onClick={handleMenuToggle} aria-label='Toggle menu'>
        {menu ? (
          <AiOutlineClose size={30} />
        ) : (
          <AiOutlineMenuUnfold size={30} />
        )}
      </button>

      {menu && (
        <div className='navbar_mobile'>
          <Link to='about' spy={true} smooth={true} duration={500}>
            About
          </Link>
          <Link to='skills' spy={true} smooth={true} duration={500}>
            Skills
          </Link>
          <Link to='projects' spy={true} smooth={true} duration={500}>
            Projects
          </Link>
          <Link to='contact' spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </div>
      )}

      <div className='navbar_desktop'>
        <Link to='about' spy={true} smooth={true} duration={500}>
          About
        </Link>
        <Link to='skills' spy={true} smooth={true} duration={500}>
          Skills
        </Link>
        <Link to='projects' spy={true} smooth={true} duration={500}>
          Projects
        </Link>
        <Link to='contact' spy={true} smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
