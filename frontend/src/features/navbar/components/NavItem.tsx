import styles from './NavItem.module.scss'
import { Link } from "@tanstack/react-router";
import { Navlink } from "../types/Navlink";

type PropTypes = {
  navlink: Navlink,
}

export function NavItem({ navlink }: PropTypes) {
  return (
    <Link to={navlink.link}>
      {({ isActive }) => { // inner component
        return (
          <div className={`${styles['nav-item']} ${isActive ? styles['nav-item-active'] : ''}`}>
            <img className={styles['nav-item-icon']} src={navlink.icon} />
            <p className={styles['nav-item-name']}>{navlink.extended_name}</p>
          </div>
        )
      }}
    </Link>
  )
}
