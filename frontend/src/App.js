import './index.css'
import {Layout} from "./pages/Layout/Layout";
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
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import LayoutEmptiness from "./pages/Layout/LayoutEmptiness";
import InstitutionPage from "./pages/institutionPage/institutionPage";
import FormLoginPage from "./pages/formPage/formLoginPage";
import FormRegistrationPage from "./pages/formPage/formRegistrationPage";
import FormBidPage from "./pages/formPage/formBidPage";
import RecoveryEmailPage from "./pages/formPage/recoveryPassword/recoveryEmailPage";
import RecoveryCodePage from "./pages/formPage/recoveryPassword/recoveryCodePage";
import RecoveryNewPassword from "./pages/formPage/recoveryPassword/recoveryNewPassword";
import FormReviewPage from "./pages/formPage/formReviewPage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/institutes' element={<TablePage title={'Школы'}/>}/>
            <Route path='/institutes/institutePage' element={<InstitutePage institute_title={'Название категории'}/>}/>
            <Route path='/institutionPage' element={<InstitutionPage/>}/>

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
            <Route path='/allReviews' element={<ReviewsPage/>}/>

            <Route path='/404' element={<Error400/>}/>
            <Route path='/500' element={<Error500/>}/>

          </Route>
          <Route path='/form' element={<LayoutEmptiness/>}>
            <Route path='login' element={<FormLoginPage form_title={'Вход'}/>}/>
            <Route path='registration' element={<FormRegistrationPage form_title={'Регистрация'}/>}/>
            <Route path='bid' element={<FormBidPage form_title={'Заявка учреждения'}/>}/>
            <Route path='review' element={<FormReviewPage form_title={'Отзыв'}/>}/>
            <Route path='recoveryPassword/email' element={<RecoveryEmailPage form_title={'Забыли пароль?'}/>}/>
            <Route path='recoveryPassword/code' element={<RecoveryCodePage form_title={'Введите код'}/>}/>
            <Route path='recoveryPassword/newPassword' element={<RecoveryNewPassword form_title={'Новый пароль'}/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
