import Header from 'layouts/Header'
import Footer from 'layouts/Footer'
import styles from "./Layout.module.css"

function Layout({chidren}) {
  return (
  <>
  <Header/>
  <div className={styles.main}>{chidren}</div>
  <Footer/>
  </>
  );
}

export default Layout