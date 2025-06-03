import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  About,
  Contact,
  Footer,
  Gallery,
  Hero,
  Identification,
  Projects,
} from "./components/pages";
function App() {
  return (
    <div className="App" id="root">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Hero} />
          <Route path="/about" Component={About} />
          <Route path="/projects" Component={Projects} />
          <Route path="/gallery" Component={Gallery} />
          <Route path="/contact" Component={Contact} />
          <Route path="/identification" Component={Identification} />
          <Route path="*" Component={Hero} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
