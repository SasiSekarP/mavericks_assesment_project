import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./style/navbar.css";
import "./style/hero.css";
import "./style/about.css";
import "./style/commonfooter.css";
import "./style/pagenotfound.css";
import "./style/services.css";

import Hero from "./component/hero";
import About from "./component/about";
import Services from "./component/services";
import Notfound from "./component/pagenotfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Hero} />
        <Route path="/about" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="*" Component={Notfound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
