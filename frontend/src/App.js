import './index.css'
import {Layout} from "./pages/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/home";
import TablePage from "./pages/tablePage/tablePage";
import InstitutePage from "./pages/institutePage/institutePage";
import PartPage from "./pages/partPage/partPage";
import PartPersonPage from "./pages/partPersonPage/PartPersonPage";
import SubscriptionsPage from "./pages/subscriptionsPage/SubscriptionsPage";
import MarkerPage from "./pages/markerPage/markerPage";
import SupportPage from "./pages/SupportPage/SupportPage";
import Error400 from "./pages/errors/Error400";
import Error500 from "./pages/errors/Error500";
import Notifications from "./pages/notifications/notifications";
import MyProfilePage from "./pages/profilePages/myProfilePage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/institutes' element={<TablePage title={'Школы'}/>}/>
            <Route path='/institutes/institutePage' element={<InstitutePage institute_title={'Название категории'}/>}/>
            <Route path='/subjects' element={<TablePage path={'/subjects/subjectPage'} title={'Дочерние субъекты'}
                                                        subtitle={'Дочерние субъекты выбранной территории'}/>}/>
            <Route path='/parts' element={<TablePage path={'/parts/partPage'} title={'Партии'}
                                                     subtitle={'Зарегистрированные политические партии выбранной территории'}/>}/>
            <Route path='/parts/partPage' element={<PartPage text={'Название Партии'}/>}/>
            <Route path='/parts/partPage/partPerson' element={<PartPersonPage text={'Название Партии'}/>}/>
            <Route path='/Subscriptions' element={<SubscriptionsPage/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
            <Route path='/MarkerPage' element={<MarkerPage/>}/>
            <Route path='/support' element={<SupportPage/>}/>
            <Route path='/myProfile' element={<MyProfilePage/>}/>




            <Route path='/404' element={<Error400/>}/>
            <Route path='/500' element={<Error500/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
