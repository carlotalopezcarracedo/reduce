import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { LayersIndex } from './pages/layers/LayersIndex';
import { LayerPage } from './pages/layers/LayerPage';
import { ProductsIndex } from './pages/products/ProductsIndex';
import { ProductDestripa } from './pages/products/ProductDestripa';
import { ProductTemplate } from './pages/products/ProductTemplate';
import { Technology } from './pages/Technology';
import { Sectors } from './pages/Sectors';
import { Contact } from './pages/Contact';
import { CaseAperturaMultisede } from './pages/cases/CaseAperturaMultisede';
import { AvisoLegal } from './pages/legal/AvisoLegal';
import { PoliticaPrivacidad } from './pages/legal/PoliticaPrivacidad';
import { PoliticaCookies } from './pages/legal/PoliticaCookies';
import { Accesibilidad } from './pages/legal/Accesibilidad';

const base = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'modelo', element: <LayersIndex /> },
      { path: 'modelo/:slug', element: <LayerPage /> },
      { path: 'productos', element: <ProductsIndex /> },
      { path: 'productos/destripa-tu-indexado', element: <ProductDestripa /> },
      { path: 'productos/:slug', element: <ProductTemplate /> },
      { path: 'tecnologia', element: <Technology /> },
      { path: 'sectores', element: <Sectors /> },
      { path: 'contacto', element: <Contact /> },
      { path: 'casos/apertura-multisede', element: <CaseAperturaMultisede /> },
      { path: 'aviso-legal', element: <AvisoLegal /> },
      { path: 'privacidad', element: <PoliticaPrivacidad /> },
      { path: 'cookies', element: <PoliticaCookies /> },
      { path: 'accesibilidad', element: <Accesibilidad /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
], { basename: base });

export default function App() {
  return <RouterProvider router={router} />;
}
