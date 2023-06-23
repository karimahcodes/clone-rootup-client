// import FarmSearchPage from './Pages/FarmSearchPage/FarmSearchPage';
// import FarmCategoryPage from './Pages/FarmCategoryPage/FarmCategoryPage';
import Header from './Components/Header/Header';
import FarmSearchPage from './Pages/FarmSearchPage/FarmSearchPage';
import SelectedFarmPage from './Pages/SelectedFarmPage/SelectedFarmPage';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
      
    <BrowserRouter>
      <Header />
      <Routes>
        {/* dummy route: */}
        <Route path="/" element={<SelectedFarmPage/>} />

        <Route path="farms/:farmId" element={<SelectedFarmPage/>} />

        <Route path="/browse" element={<FarmSearchPage />} />
        {/* <Route path="/browse/farm-type" element={<FarmCategoryPage category="farmTypes"/>}/> */}
        {/* <Route path="/browse/community" element={<FarmCategoryPage category="community"/>}/> */}
        

        {/* <Route path="/" element={<FarmSearchPage/>} /> 
        {/* <Route path="/farms" element={<FarmCategoryPage/>} />
         */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
