
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='font-inter'>
            <Navbar></Navbar>
           <div className='min-h-screen'>
           <Outlet></Outlet>
           </div>
           <div>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default MainLayout;