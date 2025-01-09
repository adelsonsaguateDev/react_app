import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
function NavBar(){
    return (
        <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    );

}

export default NavBar;