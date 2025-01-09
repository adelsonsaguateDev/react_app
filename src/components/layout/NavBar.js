import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import { FaHome, FaMobileAlt , FaHotel  } from "react-icons/fa";

function NavBar(){
    return (
        <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/"><FaHome /> Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/empresa"><FaHotel /> Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contacto"><FaMobileAlt /> Contacto</Link>
          </li>
        </ul>
      </nav>
    );

}

export default NavBar;