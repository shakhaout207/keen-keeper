import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft, HiOutlineExclamationCircle } from 'react-icons/hi';

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
          <HiOutlineExclamationCircle className="text-4xl text-red-500" />
        </div>

        <h1 className="mb-2 text-4xl font-bold text-slate-900">404</h1>
        <h2 className="mb-3 text-2xl font-semibold text-slate-800">
          Page Not Found
        </h2>

        <p className="mb-6 text-sm leading-6 text-slate-500 sm:text-base">
          Sorry, the page you are looking for does not exist or the route is invalid.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-[#225c49] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          <HiOutlineArrowLeft className="text-base" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}