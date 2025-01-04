// src/components/Layout/Layout.js
import Navbar from './Navbar';
import Topbar from './Topbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Topbar />
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;