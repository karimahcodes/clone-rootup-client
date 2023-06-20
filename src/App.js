// import FarmSearchPage from './Pages/FarmSearchPage/FarmSearchPage';
// import FarmCategoryPage from './Pages/FarmCategoryPage/FarmCategoryPage';
import Header from './Components/Header/Header';
import SelectedFarmPage from './Pages/SelectedFarmPage/SelectedFarmPage';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
      
    <BrowserRouter>
      <Header />
      <Routes>
        {/* dummy route: */}
        <Route path="/" element={<SelectedFarmPage/>} />



        {/* <Route path="/" element={<FarmSearchPage/>} /> 
        {/* <Route path="farms" element={<FarmCategoryPage/>} />
        <Route path="farms/:id" element={<SelectedFarmPage/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
