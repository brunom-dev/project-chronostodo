import styles from "./styles.module.css"

import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from "lucide-react"

export const Menu = () => {
    return (
        <nav className={styles.menu}>

            <a href="#" className={styles.menuLink}>
                <HouseIcon />
            </a>

            <a href="#" className={styles.menuLink}>
                <HistoryIcon />
            </a>

            <a href="#" className={styles.menuLink}>
                <SettingsIcon />
            </a>

            <a href="#" className={styles.menuLink}>
                <SunIcon />
            </a>

        </nav>
    )
}