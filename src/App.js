// import FarmCategoryPage from './Pages/FarmCategoryPage/FarmCategoryPage';
import Header from './Components/Header/Header';
import FarmSearchPage from './Pages/FarmSearchPage/FarmSearchPage';
import SelectedFarmPage from './Pages/SelectedFarmPage/SelectedFarmPage';
import AboutPage from './Pages/AboutPage/About';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import FarmTypesPage from './Pages/FarmTypesPage/FarmTypesPage';
import FarmListPage from './Pages/FarmListPage/FarmListPage';
import CommunitiesPage from './Pages/CommunitiesPage/CommunitiesPage';
import RegionsPage from './Pages/RegionsPage/RegionsPage';
import UserProfilePage from './Pages/UserProfilePage/UserProfilePage';
import backgroundImage from './assets/images/site-images/soil-sky-bg.svg';

function App() {

  return (
      
    <BrowserRouter>
      <Header />
      <div className='site-bg' style={{backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        height: '75vh'
        }}>
        <Routes>
          
          <Route path="/About" element={<AboutPage />} />
          <Route path="/" element={<AboutPage/>} />

          {/* revisit this and calling from FarmCategory Page instead */}
          
          <Route path="/browse" element={<FarmSearchPage />} />
          <Route path="/browse/farmtypes" element={<FarmTypesPage/>}/>
          <Route path="/browse/communities" element={<CommunitiesPage/>}/>
          <Route path="/browse/regions" element={<RegionsPage/>}/>

          <Route path="/categories/:category" element={<FarmListPage/>}/>
          <Route path="/categories/:category/:farmId" element={<SelectedFarmPage/>} />

          <Route path="/farms/:farmId" element={<SelectedFarmPage/>} />       
          <Route path="/user" element={<UserProfilePage/>} />
          {/* <Route path="/farms" element={<FarmCategoryPage/>} />
          */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
