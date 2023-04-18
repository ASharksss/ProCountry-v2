import './index.css'
import {Layout} from "./pages/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Home} from "./pages/home/home";
import TablePage from "./pages/tablePage/tablePage";
import InstitutePage from "./pages/institutePage/institutePage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/institute' element={<TablePage title={'Школы'}/>}/>
            <Route path='/institutePage' element={<InstitutePage institute_title={'Название категории'}/>}/>
            <Route path='/subjects' element={<TablePage title={'Дочерние субъекты'} subtitle={'Дочерние субъекты выбранной территории'}/>}/>
            <Route path='/parts' element={<TablePage title={'Партии'} subtitle={'Зарегистрированные политические партии выбранной территории'}/>}/>

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
