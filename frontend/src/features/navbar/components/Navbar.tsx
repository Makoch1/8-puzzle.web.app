import styles from "./Navbar.module.scss"
import { Navlink } from "../types/Navlink"
import { NavItem } from "./NavItem"

// icons
import dailyIcon from "../assets/daily_icon.png"
import puzzleIcon from "../assets/puzzle_icon.png"
import profileIcon from "../assets/profile_icon.png"
import leaderboardIcon from "../assets/leaderboard_icon.png"

const navlinks: Navlink[] = [
  {
    extended_name: 'Puzzle',
    link: '/puzzle/',
    icon: puzzleIcon,
  },
  {
    extended_name: 'Leaderboards',
    link: '/leaderboards/',
    icon: leaderboardIcon,
  },
  {
    extended_name: 'Daily Puzzle',
    link: '/daily/',
    icon: dailyIcon,
  },
  {
    extended_name: 'Profile',
    link: '/profile/',
    icon: profileIcon,
  },
]

export function Navbar() {
  return (
    <div id="navbar" className={styles.navbar}>
      {
        navlinks.map(
          (link, index) => <NavItem key={index} navlink={link} />
        )
      }
    </div>
  )
}
