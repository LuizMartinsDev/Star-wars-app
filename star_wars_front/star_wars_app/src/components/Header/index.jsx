import styles from './index.module.css'
import logoDesktop from '../../assets/star-wars-logo-desk.png'
const Header = () => {
  return (
    <header>
      <img src={logoDesktop} className={styles.logo_desktop} alt="logo star wars" />
      <nav>
        <ul className={styles.container_list}>
          <li className={styles.list}>Filmes</li>
          <li className={styles.list}>Séries</li>
          <li className={styles.list}>Animações</li>
          <li className={styles.list}>Livros</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header