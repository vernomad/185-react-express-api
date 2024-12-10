import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import './App.css'
import RootRoutes from './routes/root.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx'; 
import { UserProvider } from './UserProvider.tsx';
import Drawer from './components/Drawer.tsx';
import HeaderScrollEffect from './components/HeaderScrollEffect.tsx';


// interface ContactProp {
//   contactDetails: React.ReactNode;
// }

function App() {

  const contactDetails = <><div className="container-address">Address and extra content</div></>
  return (
    <UserProvider>
    <Router future={{ v7_relativeSplatPath: true }}>
    <HeaderScrollEffect />
    <Header />
    <Suspense fallback={<h1>Loading...</h1>}>
    <RootRoutes />
    </Suspense>
    <Footer />
    <Drawer contactDetails={contactDetails}  />
    </Router>
    </UserProvider>
  )
}

export default App
