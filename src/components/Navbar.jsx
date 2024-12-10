import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return  (
  <nav className="containerNavbar">
    <div className="containerLogo">
        <img src={logo} alt="logo" />
    </div>
    <div>
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
    </div>
    <p>rtegrfdgerdshgehshhdhh</p>
  </nav>
  );
};

export default Navbar;