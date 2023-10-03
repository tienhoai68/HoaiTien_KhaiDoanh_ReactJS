import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import BackToTop from "./pages/Home/BackToTop/BackToTop";
function App() {
  return (
    <BrowserRouter>
      <Router />
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
