import { Link, NavLink } from 'react-router-dom';
import {
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineHome,
} from 'react-icons/hi';
import logo from '../../assets/logo.png';

const navLinks = [
  { name: 'Home', path: '/', icon: HiOutlineHome },
  { name: 'Timeline', path: '/timeline', icon: HiOutlineClock },
  { name: 'Stats', path: '/stats', icon: HiOutlineChartBar },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="KeenKeeper" className="h-8 w-auto" />
        </Link>

        <nav className="flex items-center gap-3">
          {navLinks.map(({ name, path, icon: Icon }) => (
            <NavLink key={name} to={path} end={path === '/'}>
              {({ isActive }) => (
                <div
                  className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#225c49] text-white shadow-sm'
                      : 'bg-transparent text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon
                    className={`text-[18px] ${
                      isActive ? '!text-white' : 'text-slate-700'
                    }`}
                  />
                  <span className={isActive ? '!text-white' : 'text-slate-700'}>
                    {name}
                  </span>
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}