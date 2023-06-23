// import FarmCategoryPage from './Pages/FarmCategoryPage/FarmCategoryPage';
import Header from './Components/Header/Header';
import FarmSearchPage from './Pages/FarmSearchPage/FarmSearchPage';
import SelectedFarmPage from './Pages/SelectedFarmPage/SelectedFarmPage';
import AboutPage from './Pages/AboutPage/About';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import FarmTypesPage from './Pages/FarmTypesPage/FarmTypesPage';
import FarmListPage from './Pages/FarmListPage/FarmListPage';

function App() {

  return (
      
    <BrowserRouter>
      <Header />
      <Routes>
        {/* dummy route: */}
        <Route path="/" element={<SelectedFarmPage/>} />

        <Route path="farms/:farmId" element={<SelectedFarmPage/>} />

        <Route path="/browse" element={<FarmSearchPage />} />
        
        <Route path="/About" element={<AboutPage />} />

        {/* revisit this and calling from FarmCategory Page instead */}
        <Route path="/browse/farmtypes" element={<FarmTypesPage/>}/>
        <Route path="/categories/:category" element={<FarmListPage/>}/>


        {/* <Route path="/browse/community" element={<FarmCategoryPage category="community"/>}/> */}
        

        {/* <Route path="/" element={<FarmSearchPage/>} /> 
        {/* <Route path="/farms" element={<FarmCategoryPage/>} />
         */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
