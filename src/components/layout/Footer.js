import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from './Footer.module.css'
function Footer() {
    const currentYear = new Date().getFullYear(); // Obtém o ano atual

    return (
        <footer>
            <ul className={styles.social_list}>
                <li ><FaFacebook/></li>
                <li><FaLinkedin/></li>
                <li><FaInstagram/></li>
            </ul>
            <p>Todos os direitos reservados &copy; {currentYear}</p>
        </footer>
    );
}

export default Footer;
