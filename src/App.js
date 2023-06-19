import logo from './logo.svg';
import './App.css';
import {Browserrouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Browserrouter>
      <Routes>
        <Route path="/" element={<FarmSearchPage/>} />
        <Route path="farms" element={<FarmCategoryPage/>} />
        <Route path="farms/:id" element={<SelectedFarmPage/>} />
      </Routes>
  
    </Browserrouter>
  );
}

export default App;
