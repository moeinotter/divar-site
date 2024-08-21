import Header from 'layouts/Header';
import Footer from 'layouts/Footer';
import Router from 'src/router/Router';

function Layout({chidren}) {
  return (
  <>
  <Header/>
  <Router>
  </Router>
  <Footer/>
  </>
  );
}

export default Layout