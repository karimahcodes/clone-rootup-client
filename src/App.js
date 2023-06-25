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

function App() {

  return (
      
    <BrowserRouter>
      <Header />
      <Routes>
        
        <Route path="/About" element={<AboutPage />} />
        <Route path="/" element={<SelectedFarmPage/>} />

        {/* revisit this and calling from FarmCategory Page instead */}
        
        <Route path="/browse" element={<FarmSearchPage />} />
        <Route path="/browse/farmtypes" element={<FarmTypesPage/>}/>
        <Route path="/browse/communities" element={<CommunitiesPage/>}/>
        <Route path="/browse/regions" element={<RegionsPage/>}/>

        <Route path="/categories/:category" element={<FarmListPage/>}/>
        <Route path="/farms/:farmId" element={<SelectedFarmPage/>} />

        {/* <Route path="/browse/community" element={<FarmCategoryPage category="community"/>}/> */}
        
        {/* <Route path="/farms" element={<FarmCategoryPage/>} />
         */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
