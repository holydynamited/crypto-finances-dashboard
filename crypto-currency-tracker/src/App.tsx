import Layout from './layouts/Layout';
import DashboardLayout from './layouts/DashboardLayout';
import AssetsList from './components/AssetsList';
import './App.css'

function App() {
 

  return (
    
      <Layout>


     
        <DashboardLayout>

        <AssetsList/>

        </DashboardLayout>
        

      </Layout>
  );
}

export default App
