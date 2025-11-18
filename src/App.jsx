import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import AboutMe from './components/Sobre';
import Technologies from './components/Tecnologias';
import Home from './components/Home'

function App() {
  return (
    <div className="container">
      <Header />
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Technologies></Technologies>
      <h2 class="trabalho">Trabalhos anteriores</h2>
      <Home></Home>
      <Footer />
    </div>
  );
}

export default App;
