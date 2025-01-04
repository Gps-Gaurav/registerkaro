// src/components/Layout/Layout.js
import Navbar from './Navbar';
import Topbar from './Topbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="w-full overflow-x-hidden">
            <Topbar />
            <Navbar />
            <main className="w-full overflow-x-hidden">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;