import Home from "./Pages/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";

function App() {
  return (
    <div>
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
