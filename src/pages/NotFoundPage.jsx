import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

export default function NotFoundPage() {
  return (
    <MainLayout>
      <section className="mx-auto flex max-w-4xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
          404 Error
        </span>

        <h1 className="mt-6 text-4xl font-bold text-slate-800 sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-4 max-w-xl text-slate-500">
          The page you are looking for does not exist or the route is invalid.
        </p>

        <Link
          to="/"
          className="mt-8 rounded-lg bg-[#225c49] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c4c3d]"
        >
          Back to Home
        </Link>
      </section>
    </MainLayout>
  );
}