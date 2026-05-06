import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AssetsList from './components/assets-list/AssetsList';
import Portfolio from './components/Portfolio';



function App() {
  return (
    <BrowserRouter>
   
      < MainLayout>
        <Routes>
        
          <Route path="/assets" element={<AssetsList />} />
          
        
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </ MainLayout>
     
    </BrowserRouter>
  );
}

export default App;