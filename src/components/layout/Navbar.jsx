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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="KeenKeeper" className="h-7 w-auto" />
        </Link>

        <nav className="flex items-center gap-2">
          {navLinks.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-[#225c49] text-white shadow-sm'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                }`
              }
            >
              <Icon className="text-base" />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}