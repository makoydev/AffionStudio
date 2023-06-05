import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import Home from "./Pages/Home";

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
