import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from './layouts/MainLayout';
import AssetsList from './pages/AssetsList';
import Portfolio from './pages/Portfolio';


const queryClient = new QueryClient();



function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
   
      < MainLayout>
        <Routes>
        
          <Route path="/" element={<AssetsList />} />
       
        
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </ MainLayout>
     
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;