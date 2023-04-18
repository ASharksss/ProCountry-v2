import './index.css'
import {Layout} from "./pages/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/home";
import TablePage from "./pages/tablePage/tablePage";
import InstitutePage from "./pages/institutePage/institutePage";
import PartPage from "./pages/partPage/partPage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/institute' element={<TablePage title={'Школы'} path={'/institute/institutePage'}/>}/>
            <Route path='/institutePage' element={<InstitutePage institute_title={'Название категории'}/>}/>
            <Route path='/subjects' element={<TablePage path={'/subjects/subjectPage'} title={'Дочерние субъекты'} subtitle={'Дочерние субъекты выбранной территории'}/>}/>
            <Route path='/parts' element={<TablePage path={'/parts/partPage'} title={'Партии'} subtitle={'Зарегистрированные политические партии выбранной территории'}/>}/>
            <Route path='/parts/partPage' element={<PartPage text={'Название Партии'}/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
