import Header from "./Components/Header/Header";
import "./App.css"
import Home from "./Components/Home/Home";
import Features from "./Components/Features/Features";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";

  


function App() {
  return (
    <div >
    <Header></Header>
    <Home></Home>
    <Features></Features>
    <Portfolio></Portfolio>
    <Resume></Resume>
   
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
