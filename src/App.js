import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import BackgroundImg1 from "./assets/bg1.jpg";
import BackgroundImg2 from "./assets/bg2.jpg";

const App = () => {
  return (
      <>
          <Header 
            title = "My Beautiful Pokemon Game"
            descr = "Some Beautiful description about Pokemon Game"
          />
          <Layout 
            title = "My Beautiful Pokemon Game  Layout 1"
            descr = "Some Beautiful description about Pokemon Game"
            urlBg = {BackgroundImg1}
            colorBg = 'red'
          />
          <Layout 
            title = "My Beautiful Pokemon Game  Layout 2"
            descr = "Some Beautiful description about Pokemon Game"
            colorBg = '#e2e2e2'
          />
          <Layout 
            title = "My Beautiful Pokemon Game Layout 3"
            descr = "Some Beautiful description about Pokemon Game"
            urlBg = {BackgroundImg2}
            colorBg = 'green'
          />
          <Footer />
      </>
  )
}

export default App;
