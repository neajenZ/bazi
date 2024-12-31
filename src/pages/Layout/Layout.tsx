import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@widjets/Header';
import { Footer } from '@widjets/Footer';

const Layout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div style={{paddingTop: '102px'}}>
        <Outlet />
      </div>
      {location.pathname !== '/compass' && <Footer />}
    </>
  );
};

export default Layout;
