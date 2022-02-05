import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import NavBar from "./components/NavBar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
