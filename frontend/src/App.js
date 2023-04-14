import './index.css'
import {Layout} from "./pages/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LeaderCard} from "./components/leaderCard/leaderCard";
import Map from "./components/map/map";
import {Home} from "./pages/home/home";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
