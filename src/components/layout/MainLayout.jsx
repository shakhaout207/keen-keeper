import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f3f6f7] text-slate-800">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}