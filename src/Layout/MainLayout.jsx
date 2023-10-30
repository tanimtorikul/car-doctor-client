
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

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
           <Toaster />

        </div>
    );
};

export default MainLayout;