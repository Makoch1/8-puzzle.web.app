import { Outlet } from "@tanstack/react-router";
import { Navbar } from "../features/navbar/components/Navbar";
import styles from "./RootComponent.module.scss";

export function RootComponent() {
  return (
    <div className={styles['main-container']}>
      <div className={styles['nav-container']}>
        <Navbar />
      </div>
      <div className={styles['outlet-container']}>
        <Outlet />
      </div>
    </div >
  )
}
