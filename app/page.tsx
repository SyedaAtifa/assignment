import style from "./page.module.css"
import Header from "./components/Header/Header"
import Hero from "./components/hero-section/hero"
import Footer from "./components/footer/footer"

const Home = () => {
  return(
    <div className={style.page}>
     <Header></Header>
     <Hero></Hero>
     <Footer></Footer>
    </div>
  );
}

export default Home