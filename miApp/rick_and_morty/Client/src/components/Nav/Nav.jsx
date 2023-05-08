import SearchBar from "../SearchBar/SearchBar"
import styles from "./Nav.module.css"
import { Link, NavLink } from "react-router-dom"
import ROUTES from "../Rutas/routes.helper"


export default function Nav(props) {
    return <nav className={styles.nav}>
        <SearchBar onSearch={props.onSearch}
        />
        <Link to={ROUTES.HOME}>
            <button>Home</button>
        </Link>
        <Link to={ROUTES.ABOUT}>
            <button>About</button>
        </Link>
        <Link to={ROUTES.FAVORITES}>
            <button>Favorites</button>
        </Link>
    </nav>
    
}