import styles from './index.module.css'

const Home = () => {
  return(
    <section className={styles.container}>
      <div className={styles.movies}>
        <p className={styles.movies_paragraph}>Filmes</p>
      </div>
      <div className={styles.series}>
       <p  className={styles.series_paragraph}>Series</p>
      </div>
      <div className={styles.animations}>
        <p  className={styles.animations_paragraph}>Animações</p>
      </div>
      <div className={styles.books}>
        <p  className={styles.books_paragraph}>Livros</p>
      </div>
    </section>
  )
}

export default Home