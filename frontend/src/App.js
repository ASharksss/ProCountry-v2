import './index.css'
import {Layout} from "./pages/Layout";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {LeaderCard} from "./components/leaderCard/leaderCard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<LeaderCard/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
