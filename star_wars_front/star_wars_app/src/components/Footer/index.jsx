import logo from '../../assets/star-wars-logo-desk.png'
import instagram from '../../assets/icons8-instagram.svg'
import twitter from '../../assets/icons8-twitter.svg'
import facebook from '../../assets/icons8-facebook-novo.svg'
import styles from './index.module.css'
const Footer = () => {
  return(
      <footer>
        <div className={styles.container_nav}>
         <img src={logo} className={styles.logo} alt="logo star wars" />
         <nav>
          <ul className={styles.container_list}>
            <li className={styles.list}>About</li>
            <li  className={styles.list}>Events</li>
            <li  className={styles.list}>Products</li>
            <li  className={styles.list}>Support</li>
          </ul>
         </nav>
        </div>
        <div className={styles.container_media}>
          <div className={styles.container_imgs}>
            <img className={styles.img} src={twitter} alt="logo twitter" />
            <img className={styles.img} src={facebook} alt="logo facebook" />
            <img className={styles.img} src={instagram} alt="logo instagram" />
          </div>
          <p className={styles.copyright}>© 2023 Luiz Martins</p>
        </div>
      </footer>
  )
}

export default Footer